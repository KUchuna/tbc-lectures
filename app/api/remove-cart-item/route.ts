import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
 
export async function DELETE(request: Request) {
  const { productId } = await request.json();
 
  try {
    if (productId == undefined) {
      throw new Error("productId is required");
    }
 
    await sql`
      DELETE FROM cart
      WHERE productId = ${productId};
    `;
 
    const cart = await sql`
      SELECT * FROM cart;
    `;
    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    console.error('Error in remove API:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}