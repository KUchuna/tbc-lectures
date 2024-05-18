"use client";

import { createCartItemAction } from "../app/actions";
function IncreaseItemQuantity({ productId }: { productId: number }) {
  const handleIncreaseBtn = async (id: number) => {
    await createCartItemAction(id);
  };
  return <button onClick={() => handleIncreaseBtn(productId)}>+</button>;
}

export default IncreaseItemQuantity;
