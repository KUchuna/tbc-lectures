'use client'

import Image from 'next/image';
import profileLogo from '../public/assets/profilelogo.svg'
import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function ProfileButton() {

    const user = useUser()

    const [menu, setMenu] = React.useState(false)
    const containerRef = React.useRef<any>()

    React.useEffect(() => {
        const handleMenuClose = (e: any) => {
            if(e.target != containerRef.current && e.target != document.getElementById('profile-image')) {
                setMenu(false)
            }
        }

        document.addEventListener('click', handleMenuClose)
        return () => {
            document.removeEventListener('click', handleMenuClose)
        }
    }, [])

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <div className='hidden md:flex profile-button dark:bg-slate-300 dark:border-slate-500 hover:bg-slate-200 transition-colors duration-300' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className={`select-none absolute ${user.user ? "bottom-[-100px]" : "bottom-[-60px]"} left-[50%] w-[100px] translate-x-[-50%] bg-[white] flex items-center flex-col justify-center border px-0 py-2 rounded-lg border-solid border-[rgb(209,209,209)] dark:bg-slate-500 dark:border-slate-700`}>
                        {user.user &&
                                <Link href='/profile' className='w-full'>
                                <li className='w-full text-[#475467] font-bold text-[0.9rem] transition-[background-color] duration-300 ease-[ease] px-3 py-2 dark:text-slate-200 dark:hover:bg-slate-400 hover:bg-[rgb(238,237,237)]'>
                                    Profile
                                </li>
                            </Link>
                        }
                        {user.user ?
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`} className='w-full'>
                            <li className='w-full text-[#475467] font-bold text-[0.9rem] transition-[background-color] duration-300 ease-[ease] px-3 py-2 dark:text-slate-200 dark:hover:bg-slate-400 hover:bg-[rgb(238,237,237)]'>
                                Log out
                            </li>
                        </a>
                        :
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`} className='w-full'>
                            <li className='w-full text-[#475467] font-bold text-[0.9rem] transition-[background-color] duration-300 ease-[ease] px-3 py-2 dark:text-slate-200 dark:hover:bg-slate-400 hover:bg-[rgb(238,237,237)]'>
                                Log in
                            </li>
                        </a>
                        }
                        
                    </ul>
                    :
                    <></>}
        </div>
    )
}