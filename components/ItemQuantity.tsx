import React from "react";
import { getCart } from "@/api";

async function ItemQuantity({ productId }: { productId: number }) {
  const cartItems = await getCart();
  return (
    <div>
      {cartItems.find(
        (item: { id: number; productid: number; quantity: number }) =>
          item.productid === productId
      )?.quantity || 0}
      in cart
    </div>
  );
}

export default ItemQuantity;
