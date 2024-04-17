'use client'

import { redirect } from "next/navigation"

export default function LogOut({onclick}) {
    function handleClick() {
        onclick()
        redirect('/login')
    }
   return <span className='log-out' onClick={handleClick}>Log out</span>
}