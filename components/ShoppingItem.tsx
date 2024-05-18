import React from "react";
import Image from "next/image";
import RemoveCartItem from "./RemoveCartItem";
 
export default async function ShoppingItem({
  productId,
}: {
  productId: number;
}) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return (
    <div className="flex flex-col bg-slate-400 rounded-xl cursor-pointer">
      <div className="p-2">
    <div className="flex flex-col bg-slate-400 rounded-xl cursor-pointer">
      <div className="p-2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={250}
          className="rounded-lg "
          height={250}
          className="rounded-lg "
        />
      </div>
      <div className="px-4 py-8">
      <div className="px-4 py-8">
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-semibold">Price</p>
        <p>{product.price}$$</p>
        <p className="font-semibold">Rating</p>
        <p>{product.rating}</p>
      </div>
      <RemoveCartItem
        id={product.id}
      />
    </div>
  );
}