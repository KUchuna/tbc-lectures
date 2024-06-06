"use server";
import React from "react";
import Image from "next/image";
import IncreaseItemQuantity from "./IncreaseItemQuantity";
import DecreaseItemQuantity from "./DecreaseItemQuantity";
import ItemQuantity from "./ItemQuantity";
import RemoveCartItem from "./RemoveCartItem";


export default async function CartItem({
  productId,
}: {
  productId: number;
}) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return (
    <div className="flex flex-col dark:bg-slate-500 bg-service-card-cont rounded-xl cursor-pointer w-[320px]">
      <div className="p-2 w-[fill] h-[250px]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={250}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-8 pb-2">
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-semibold">Price</p>
        <p>{product.price}$</p>
        <p className="font-semibold">Rating</p>
        <p>{product.rating}</p>
        <div className="flex mt-5 w-full justify-center">
          <DecreaseItemQuantity productId={productId} />
          <ItemQuantity productId={productId} />
          <IncreaseItemQuantity productId={productId} />
        </div>
      </div>
      <RemoveCartItem
        id={product.id}
      />
    </div>
  );
}
 