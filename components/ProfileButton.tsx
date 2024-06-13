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
        <div className='profile-button dark:bg-slate-300 dark:border-slate-500' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className='profile-actions dark:bg-slate-500 dark:border-slate-700'>
                        <Link href='/profile' className='w-full'>
                            <li className='dark:text-slate-200 dark:hover:bg-slate-400'>
                                Profile
                            </li>
                        </Link>
                        {user.user ?
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`} className='w-full'>
                            <li className='dark:text-slate-200 dark:hover:bg-slate-400'>
                                Log out
                            </li>
                        </a>
                        :
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`} className='w-full'>
                            <li className='dark:text-slate-200 dark:hover:bg-slate-400'>
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