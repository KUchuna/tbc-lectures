import Image from "next/image";
import bookingssvg from "@/public/assets/bookings.svg";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function HeaderBookings() {

  const data = await getSession()



  return (
    <Link href={data ? '/bookings' : `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`}>
      <div className="relative dark:bg-slate-300 flex items-center justify-center w-10 p-2 rounded-lg cursor-pointer bg-white border dark:border-slate-400">
        <Image src={bookingssvg} alt="" />
      </div>
    </Link>
  );
}
