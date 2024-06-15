"use client"

import { createBookingAction } from "@/app/actions"
import { useUser } from '@auth0/nextjs-auth0/client';

interface BookButton {
    id: number
  }



export default function BookService(props: BookButton) {
    
    const { user } = useUser();
    let auth_id:any;

    user ? auth_id = user?.sub : auth_id = null

    async function handleBookingItem(service_id: number, auth_id: string) {
        await createBookingAction(service_id, auth_id)
    }
    return (
        <button className='w-full bg-service-card-orange py-[16px] text-white rounded-xl shadow-def-button active:translate-y-[5px] active:shadow-clicked-button transition-all duration-100' onClick={() => props.id !== undefined && handleBookingItem(props.id, auth_id)}>Book this service</button>
    )
}