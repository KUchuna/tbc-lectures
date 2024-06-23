import Image from "next/image";
import bookingssvg from "@/public/assets/bookingslight.svg";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function HeaderBookings() {

  const data = await getSession()



  return (
    <Link href={data ? '/bookings' : `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`} className="hidden md:block">
      <div className="dark:bg-slate-300 flex items-center justify-center w-10 p-2 rounded-lg cursor-pointer bg-white border dark:border-slate-400 hover:bg-slate-200 transition-colors duration-300">
        <Image src={bookingssvg} alt="" />
      </div>
    </Link>
  );
}
