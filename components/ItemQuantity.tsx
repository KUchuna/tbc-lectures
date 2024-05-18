import React from "react";
import { getCartItemAction } from "@/app/actions";
// type cartItem = {
//   id: number;
//   productId: number;
//   quantity: number;
// };
async function ItemQuantity({ productId }: { productId: number }) {
  const count = await getCartItemAction(productId);
  console.log(count, "count");

  return <div>in cart</div>;
}

export default ItemQuantity;
