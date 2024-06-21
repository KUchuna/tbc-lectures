import { put } from '@vercel/blob';
import { NextResponse, NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
import { getSession } from '@auth0/nextjs-auth0';



export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ message: 'Filename is required' }, { status: 400 });
  }

  const session = await getSession();

  if (!session || !session.user) {
    return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
  }

  const authId = session.user.sub;

  if (!req.body) {
    return NextResponse.json({ message: 'Request body is required' }, { status: 400 });
  }

  let blob;
  try {
    blob = await put(filename, req.body, {
      access: 'public',
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ message: 'Error uploading image' }, { status: 500 });
  }

  const avatarUrl = blob.url;

  try {
    const result = await sql`
      UPDATE authusers
      SET avatar = ${avatarUrl}
      WHERE auth_id = ${authId}
    `;

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating user avatar:', error);
    return NextResponse.json({ message: 'Error updating user avatar' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Image uploaded and avatar updated successfully', blob }, { status: 200 });
}
