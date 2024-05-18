import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
  const { productId } = await request.json();
  try {
    const cartItem = await sql`SELECT * FROM cart WHERE productId=${productId}`;

    return NextResponse.json({ cartItem }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
