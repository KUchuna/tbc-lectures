"use client";

import { createCartItemAction } from "../app/actions";
function IncreaseItemQuantity({ productId }: { productId: number }) {
  const handleIncreaseBtn = async (id: number) => {
    await createCartItemAction(id);
  };
  return <button onClick={() => handleIncreaseBtn(productId)} className="px-3 py-1 bg-slate-700 ml-2 hover:bg-slate-900 text-white">+</button>;
}

export default IncreaseItemQuantity;
