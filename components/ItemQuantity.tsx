import React from "react";
import { getCart } from "@/api";

async function ItemQuantity({ productId }: { productId: number }) {
  const cartItems = await getCart();
  return (
    <div className="flex items-center">
      In cart:
      <span className="ml-2">
        {cartItems.find(
          (item: { id: number; productid: number; quantity: number }) =>
            item.productid === productId
        )?.quantity || 0}
      </span>
    </div>
  );
}

export default ItemQuantity;
