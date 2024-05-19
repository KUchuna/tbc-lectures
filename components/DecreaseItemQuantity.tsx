"use client";

import { decreaseCartItemAction } from "../app/actions";
function DecreaseItemQuantity({ productId }: { productId: number }) {
  const handleDecreaseBtn = async (id: number) => {
    await decreaseCartItemAction(id);
  };
  return <button onClick={() => handleDecreaseBtn(productId)}>-</button>;
}

export default DecreaseItemQuantity;
