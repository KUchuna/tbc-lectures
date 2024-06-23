import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const auth_id = url.searchParams.get('auth_id');

  if (!auth_id) {
    return NextResponse.json({ error: 'auth_id is required' }, { status: 400 });
  }

  try {
    const result = await sql`
      SELECT * FROM authusers WHERE auth_id = ${auth_id} LIMIT 1;
    `;

    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
};
