import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { productId } = await request.json();

  try {
    const existingCartItem = await sql`
            SELECT * FROM cart
            WHERE  productId = ${productId};
        `;
    if (existingCartItem.rows.length > 0) {
      const currentQuantity = existingCartItem.rows[0].quantity;
      if (currentQuantity > 1) {
        await sql`
                    UPDATE cart
                    SET quantity = quantity - 1
                WHERE productId = ${productId};
                `;
      } else {
        await sql`
                    DELETE FROM cart
                    WHERE  productId = ${productId};

                `;
      }
    } else {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
