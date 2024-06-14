import { getBookings } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Bookings() {

  const data = await getSession()

  let auth_id;

  if(data) {
    auth_id = data.user.sub
  }

  const bookings = await getBookings(auth_id)

  return (
    <div className="min-h-[100vh] dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
          {bookings.map((booking: any) => <h1>{booking.id}</h1>)}
      </section>
    </div>
  )
}
