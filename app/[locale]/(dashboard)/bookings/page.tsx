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
    <div className="min-h-[100vh] dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
        <Bookings 
          bookedIds={bookedIds}
        />
      </section>
    </div>
  );
}
