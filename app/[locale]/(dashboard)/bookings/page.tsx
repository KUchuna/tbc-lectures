import { getBookedIds } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";
import { unstable_noStore as noStore } from "next/cache";
import Bookings from "@/components/Bookings";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function BookingsPage() {

  noStore();

  const data = await getSession();

  let auth_id;
  let bookedIds: number[] = [];

  if (data) {
    auth_id = data.user.sub;
    bookedIds = await getBookedIds(auth_id);
  }

  return (
    <div className="dark:bg-slate-800">
      <section className="h-[354px] dark:bg-slate-900 bg-section-grey flex flex-col justify-center items-center py-[96px] px-[112px] rounded-br-[20px] rounded-bl-[20px]">
        <h5 className="font-bold uppercase text-lg text-light-orange mb-[12px]">Your bookings</h5>
        <h1 className="uppercase font-bold text-5xl h-[72px] flex justify-center items-center">Review your bookings</h1>
        <p className="text-lg text-page-subtitle">Check, review or cancel your current bookings.</p>
      </section>

      <section className="h-full py-[50px] dark:bg-slate-800 flex justify-center items-end">
        <Bookings 
          bookedIds={bookedIds}
          auth_id={auth_id}
        />
      </section>
    </div>
  );
}
