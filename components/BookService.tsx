"use client"

import { createBookingAction } from "@/app/actions";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import Image from "next/image";
import yellowsvg from '@/public/assets/yellownotif.svg'
import greensvg from '@/public/assets/greennotif.svg'

interface BookButton {
  id: number;
}

export default function BookService(props: BookButton) {
    const { user } = useUser();
    const [confirmationVisible, setConfirmationVisible] = useState<boolean>(false);
    const [bookingMessage, setBookingMessage] = useState<string>('');
    const [bgColor, setBgColor] = useState<string | undefined>('')

    let auth_id:any;

    user ? auth_id = user?.sub : auth_id = null


    async function handleBookingItem(service_id: number, auth_id: string) {
        const result = await createBookingAction(service_id, auth_id);
        setConfirmationVisible(true)
        setBookingMessage(result.message);
        setBgColor(result.color)
    
        setTimeout(() => setConfirmationVisible(false), 5000);
    }

  return (
    <div>
      {!user ? (
        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`}>
          <button className='uppercase font-bold w-full bg-light-orange md:py-[16px] py-[8px] text-white rounded-xl shadow-def-button active:translate-y-[5px] active:shadow-clicked-button transition-all duration-100'>
            Book this service
          </button>
        </a>
      ) : (
        <button
          className='uppercase font-bold w-full bg-light-orange md:py-[16px] py-[8px] text-white rounded-xl shadow-def-button active:translate-y-[5px] active:shadow-clicked-button transition-all duration-100'
          onClick={() => props.id !== undefined && handleBookingItem(props.id, auth_id)}
        >
          Book this service
        </button>
      )}
    <div className={`flex justify-center items-center gap-4 fixed rounded-xl md:h-[100px] h-[50px] px-[16px]  ${confirmationVisible ? "md:bottom-[60px] top-[100px]" : "md:bottom-[-2000px] top-[-400px]" } z-[10000] w-max transition-all duration-300 left-[50%] translate-x-[-50%] ${bgColor=="green" ? "bg-[#ebfbf5] border-[#34d29d]" : "bg-[#fff8eb] border-[#FEC12F]"} border-[1px] md:py-2`}>
        <Image src={bgColor=="yellow" ? yellowsvg : greensvg} alt="" width={25} height={25} />
        <span className="text-black">
            {bookingMessage}
        </span>
    </div>
    </div>
  );
}
