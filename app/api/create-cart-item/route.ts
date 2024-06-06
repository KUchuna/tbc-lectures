import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { productId } = await request.json();

  try {
    if (productId == undefined) {
      throw new Error("productId are required");
    }

    const existingCartItem = await sql`
      SELECT * FROM cart
      WHERE productId = ${productId};
    `;

    if (existingCartItem.rows.length === 0) {
      await sql`
      INSERT INTO cart (productId, quantity)
      VALUES (${productId}, 1);
    `;
    } else {
      await sql`
      UPDATE cart
      SET quantity = quantity + 1
      WHERE productId = ${productId}
    `;
    }

    const cart = await sql`SELECT * FROM cart ORDER BY id ASC;`;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
