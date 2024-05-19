"use client";

import { decreaseCartItemAction } from "../app/actions";
function DecreaseItemQuantity({ productId }: { productId: number }) {
  const handleDecreaseBtn = async (id: number) => {
    await decreaseCartItemAction(id);
  };
  return <button onClick={() => handleDecreaseBtn(productId)} className="px-3 py-1 bg-slate-700 mr-2 hover:bg-slate-900 text-white">-</button>;
}

export default DecreaseItemQuantity;
