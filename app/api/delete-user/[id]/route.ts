import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_API_TOKEN = process.env.AUTH0_API_TOKEN;

async function deleteAuth0User(authId: string) {
  const url = `https://${AUTH0_DOMAIN}/api/v2/users/${authId}`;
  const myHeaders = new Headers({
    "Authorization": `Bearer ${AUTH0_API_TOKEN}`
  });

  const requestOptions: RequestInit = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error('Failed to delete user from Auth0');
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace('/api/delete-user/', '');

  try {
    if (!id) throw new Error('ID is required');

    // Fetch the auth_id from the database based on the user ID
    const { rows } = await sql`SELECT auth_id FROM authusers WHERE id = ${Number(id)};`;
    if (rows.length === 0) {
      throw new Error('User not found');
    }

    const authId = rows[0].auth_id;

    // Delete related bookings first
    await sql`DELETE FROM bookings WHERE auth_id = ${authId};`;

    // Delete the user from the database
    await sql`DELETE FROM authusers WHERE id = ${Number(id)};`;

    // Delete the user from Auth0
    await deleteAuth0User(authId);
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM authusers;`;

  return NextResponse.json({ users }, { status: 200 });
}
