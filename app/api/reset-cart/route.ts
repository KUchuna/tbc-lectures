import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    await sql`DELETE FROM cart`;

    const cart = await sql`SELECT * FROM cart`;
    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
