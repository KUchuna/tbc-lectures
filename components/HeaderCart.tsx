import Image from "next/image";
import cartsvg from "@/public/assets/cart.svg";
import Link from "next/link";

export default async function HeaderBookings() {

  return (
    <Link href={"/bookings"}>
      <div className="relative mr-5 dark:bg-slate-300 flex items-center justify-center ml-3 w-10 p-2 rounded-lg cursor-pointer bg-white border dark:border-slate-400">
        <Image src={cartsvg} alt="" />
      </div>
    </Link>
  );
}
