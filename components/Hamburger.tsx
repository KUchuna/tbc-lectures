"use client"

import Image from "next/image"
import hamsvg from '@/public/assets/ham.svg'
import Link from "next/link"
import { useI18n } from "@/locales/client"
import { useUser } from "@auth0/nextjs-auth0/client"
import React from "react"

export default function Hamburger() {

    const t = useI18n()

    const user = useUser()
    
    let isAdmin;

    if(user.user) {
        isAdmin = Array.isArray(user.user.role) && user.user.role.includes("admin");
    }
    

    const [open, setOpen] = React.useState<boolean>(false)

    function handleMenu() {
        setOpen(!open)
    }


    return (
        <div className="md:hidden">
            <Image src={hamsvg} alt='menu' className='md:hidden cursor-pointer' onClick={handleMenu}/>
            <div className={`absolute bg-red-500 left-0 top-[93px] right-0 overflow-hidden ${open ? "max-h-[500px]" : "max-h-0"} transition-[max-height] duration-[300ms] ease-[ease]`}>
                <ul className={`flex flex-col dark:text-slate-300 gap-[20px] transition-opacity duration-[300ms] ease-[ease-in-out] ${open ? "delay-[150ms] opacity-100" : "opacity-0"}`}>
                        <li className=''><Link href='/'>{t('home')}</Link></li>
                        <li className=''><Link href='/services'>{t('services')}</Link></li>
                        <li className=''><Link href='/blogs'>{t('Blog')}</Link></li>
                        <li className=''><Link href='/contact'>{t('contact')}</Link></li>
                        <li className=''><a href='/#faq'>{t('faq')}</a></li>
                        {isAdmin && <li className=''><Link href='/admin'>{t('admin')}</Link></li>}
                </ul>
            </div>
        </div>
    )
}
