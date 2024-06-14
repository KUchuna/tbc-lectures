import { getBookings } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Bookings() {

  const data = await getSession()

  let auth_id;
  let bookings;  

  if(data) {
    auth_id = data.user.sub
    bookings = await getBookings(auth_id)
  }


  return (
    <div className="min-h-[100vh] dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
          {data ? bookings.map((booking: any) => <h1 key={booking.id}>{booking.id}</h1>) : <h1 className="font-bold text-2xl">not signed in</h1>}

      </section>
    </div>
  )
}
