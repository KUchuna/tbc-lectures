'use client'

import Image from 'next/image';
import profileLogo from '../public/assets/profilelogo.svg'
import React from 'react';
import { redirect } from "next/navigation"


export default function ProfileButton({ handlelogout }: any) {

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

    function handleClick() {
        handlelogout()
        redirect('/login')
    }

    return (
        <div className='profile-button dark:bg-slate-300 dark:border-slate-500' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className='profile-actions dark:bg-slate-500 dark:border-slate-700'>
                        <li className='dark:text-slate-200 dark:hover:bg-slate-400'>
                            Profile
                        </li>
                        <li onClick={handleClick} className='dark:text-slate-200 dark:hover:bg-slate-400'>
                            Log out
                        </li>
                    </ul>
                    :
                    <></>}
        </div>
    )
}