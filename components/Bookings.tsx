"use client"

import { useState, useEffect } from "react";
import { getServices } from "@/api"; // Adjust the import path as needed
import FancyLoading from "./FancyLoading";

interface BookingIds {
  bookedIds: number[];
}

export default function Bookings(props: BookingIds) {

  const [bookedServices, setBookedServices] = useState<any[]>([]);



  useEffect(() => {
    const fetchBookedServices = async () => {
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
      }
    };

    fetchBookedServices();
  }, [props.bookedIds]);


  return (
    <div>
      {bookedServices.length > 0 ? (
        bookedServices.map((service) => (
          <div key={service.id}>
            <h1 className="font-bold">{service.title}</h1>
            <p>{service.short_description}</p>
          </div>
        ))
      ) : (
        <FancyLoading />
      )}
    </div>
  );
}
