import { getBookedIds } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";
import { unstable_noStore as noStore } from "next/cache";
import Bookings from "@/components/Bookings";
import { getScopedI18n } from "@/locales/server";

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

  const scopedT = await getScopedI18n('bookings')

  return (
    <div className="dark:bg-slate-800">
      <section className="md:py-[40px] md:px-[40px] py-[64px] px-[16px] lg:px-[112px] lg:py-[96px] bg-section-grey parent-flex-column-center dark:bg-slate-900 rounded-br-[20px] rounded-bl-[20px]">
        <h5 className="font-bold uppercase text-lg text-light-orange mb-[12px]">{scopedT('bookings')}</h5>
        <h1 className="mb-[23px] font-bold lg:text-5xl text-3xl text-center uppercase">{scopedT('title')}</h1>
        <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400 text-center">{scopedT('subtitle')}</p>
      </section>

      <section className="py-[64px] md:py-[96px] px-[16px] dark:bg-slate-800 flex justify-center items-end">
        <Bookings 
          bookedIds={bookedIds}
          auth_id={auth_id}
        />
      </section>
    </div>
  );
}
