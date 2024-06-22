"use client"

import { useState, useEffect } from "react";
import { getServices } from "@/api";
import FancyLoading from "./FancyLoading";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

interface BookingIds {
  bookedIds: number[];
}

export default function Bookings(props: BookingIds) {

    noStore()

  const [bookedServices, setBookedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>()


  useEffect(() => {
    const fetchBookedServices = async () => {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
      try {
        const services = await getServices();
        console.log("Fetched services:", services);
        const filteredServices = services.filter((service: any) =>
          props.bookedIds.includes(service.id)
        );
        console.log("Filtered services:", filteredServices);
        setBookedServices(filteredServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false)
      }
      
    };
    
    fetchBookedServices();
  }, [props.bookedIds]);
  


  return (
    <div className="w-full h-full flex justify-center items-center flex-col xl:max-w-[1216px] gap-6">
      {loading ? <FancyLoading />  :
      bookedServices.length == 0 ? <h1 className="font-bold text-4xl uppercase w-full flex justify-center align-center h-full"> you do not have any bookings </h1>
      :
      (
          bookedServices.map((service) => (

            <div key={service.id} className="flex gap-5 px-[15px] py-[10px] rounded-xl bg-section-grey">
              <Image src={service.image} alt="service image" width={300} height={200}  className="min-w-[300px] h-[200px] rounded-xl object-fill"/>
              <div className="flex flex-col">  
                <h1 className="font-bold">{service.title}</h1>
                <p>{service.short_description.slice(0,500)}...</p>
              </div>

              <div className="flex flex-col border-l-[1px] pl-[20px] justify-center gap-5">
                <Link href={`services/${service.id}`}>
                  <button className="w-full bg-white hover:bg-section-hover-grey py-[8px] px-[12px] text-black rounded-xl font-bold transition-colors duration-300">
                      Full info
                  </button>
                </Link>
                <button className="bg-light-orange py-[8px] px-[12px] w-max text-white rounded-xl font-bold transition-colors duration-300 hover:bg-dark-orange">
                  Cancel booking
                </button>
              </div>
            </div>
          ))
      )} 
    </div>
  );
}
