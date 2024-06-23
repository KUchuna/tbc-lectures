import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const auth_id = url.searchParams.get('auth_id');

  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const likedblogs = await sql`
      SELECT * FROM likedblogs WHERE auth_id = ${auth_id} ORDER BY id;
    `;
    
    return NextResponse.json({ likedblogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching likedblogs:", error);
    return NextResponse.json({ error: "Failed to fetch likedblogs" }, { status: 500 });
  }
};
