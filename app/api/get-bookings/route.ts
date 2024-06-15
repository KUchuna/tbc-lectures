import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const auth_id = url.searchParams.get('auth_id');

  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const bookings = await sql`
      SELECT * FROM bookings WHERE auth_id = ${auth_id} ORDER BY id;
    `;
    
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
};
