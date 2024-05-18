import Image from "next/image";
import cartsvg from "@/public/assets/cart.svg";
import Link from "next/link";
import { getCart } from "@/api.ts";

export default async function HeaderCart() {
  const cart = await getCart();
  const cartQuantity = cart.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0
  );

  return (
    <Link href={"/cart"}>
      <div className="relative mr-3 dark:bg-slate-300 flex items-center justify-center ml-3 w-10 p-2 rounded-lg cursor-pointer bg-white border dark:border-slate-400">
        <Image src={cartsvg} alt="" />
        {cartQuantity > 0 && (
          <div className="absolute -top-[20px] bg-service-card-orange text-white -right-[15px] rounded-full p-1 w-8 h-8 flex justify-center items-center">
            <span className="text-3">{cartQuantity}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
