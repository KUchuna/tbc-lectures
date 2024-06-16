"use client"

import { useState, useEffect } from "react";
import { getServices } from "@/api"; // Adjust the import path as needed
import FancyLoading from "./FancyLoading";
import { unstable_noStore as noStore } from "next/cache";

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
    <div className="w-full h-full flex justify-center items-center">
      {loading ? <FancyLoading />  :
      bookedServices.length == 0 ? <h1 className="font-bold text-4xl uppercase w-full flex justify-center align-center h-full"> you do not have any bookings </h1>
      :
      (
          bookedServices.map((service) => (
            <div key={service.id}>
              <h1 className="font-bold">{service.title}</h1>
              <p>{service.short_description}</p>
            </div>
          ))
      )} 
    </div>
  );
}
