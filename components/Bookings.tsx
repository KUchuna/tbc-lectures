"use client"

import { useState, useEffect } from "react";
import { getServices } from "@/api";
import FancyLoading from "./FancyLoading";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { deleteBookingAction, resetBookingsAction } from "@/app/actions";
import { useScopedI18n } from "@/locales/client";


interface BookingIds {
  bookedIds: number[];
  auth_id: string
}

interface service {
  price: number;
}

export default function Bookings(props: BookingIds) {

  noStore()

  const [bookedServices, setBookedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchBookedServices = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const services = await getServices();
        const filteredServices = services.filter((service: any) =>
          props.bookedIds.includes(service.id)
        );
        setBookedServices(filteredServices);

        const total = filteredServices.reduce((sum:number, service:service) => sum + Math.round(service.price), 0);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedServices();
  }, [props.bookedIds]);
  

  const scopedT = useScopedI18n('bookings.card')
  const scopedT2 = useScopedI18n('bookings')


  const handleCheckout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ services: bookedServices })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      if (response.url) {
        window.location.href = response.url;
      }
    });
    await resetBookingsAction(props.auth_id)
  }
  

  return (
    <div className="w-full h-full flex justify-center items-left flex-col xl:max-w-[1216px] gap-6">
      <div className="flex flex-col items-start gap-2">
        <span className="text-light-orange font-bold text-3xl">Total price:<span className="text-black dark:text-white"> ₾ {totalPrice}</span></span>
        <button onClick={handleCheckout} className="uppercase bg-light-orange py-[8px] px-[12px] w-max text-white rounded-xl font-bold transition-colors duration-300 hover:bg-dark-orange">{scopedT2('checkout')}</button>
      </div>
      {loading ? <FancyLoading />  :
      bookedServices.length == 0 ? <h1 className="font-bold text-4xl uppercase w-full flex justify-center align-center h-full">{scopedT2('empty')}</h1>
      :
      (
          bookedServices.map((service) => (
            <div key={service.id} className="flex md:flex-row flex-col gap-5 px-[15px] py-[10px] rounded-xl bg-section-grey dark:bg-slate-600">
              <Image src={service.image} alt="service image" width={300} height={200}  className="flex-1 min-w-[300px] md:max-w-[350px] w-full h-[200px] rounded-xl object-cover"/>
              <div className="flex flex-col md:justify-center">  
                <h1 className="font-bold">{service.title}</h1>
                <p>{service.short_description.slice(0,300)}...</p>
              </div>

              <div className="flex md:flex-col justify-between pt-[12px] md:pt-0 md:border-l-[1px] border-t-[1px] md:border-t-0 md:pl-[20px] pl-0 md:justify-center md:gap-5 gap-2">
                <Link href={`services/${service.id}`}>
                  <button className="w-full bg-white hover:bg-section-hover-grey py-[8px] px-[12px] text-black rounded-xl font-bold transition-colors duration-300">
                      {scopedT('info')}
                  </button>
                </Link>
                <button onClick={() => deleteBookingAction(service.id, props.auth_id)} className="bg-light-orange py-[8px] px-[12px] w-max text-white rounded-xl font-bold transition-colors duration-300 hover:bg-dark-orange">
                {scopedT('cancel')}
                </button>
              </div>
            </div>
          ))
      )} 
    </div>
  );
}
