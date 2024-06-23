import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const auth_id = url.searchParams.get('auth_id');

    if (!auth_id) {
      return NextResponse.json({ message: 'auth_id parameter is required' }, { status: 400 });
    }

    const result = await sql`
      SELECT avatar FROM authusers
      WHERE auth_id = ${auth_id}
    `;
    
    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const avatarUrl = result.rows[0].avatar;

    return NextResponse.json({ avatar: avatarUrl }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user avatar:', error);
    return NextResponse.json({ message: 'Error fetching user avatar' }, { status: 500 });
  }
}
