'use client'

import Image from 'next/image';
import profileLogo from '../public/assets/profilelogo.svg'
import React from 'react';
import { useRouter } from "next/navigation"
import Logout from '../scripts/logout.js'

export default function ProfileButton() {

    const [menu, setMenu] = React.useState(false)
    const containerRef = React.useRef()

    React.useEffect(() => {
        const handleMenuClose = (e) => {
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

    const router = useRouter()

    function handleLogout() {
        Logout().then(() => router.push('/login'))
    }


    return (
        <div className='profile-button dark:bg-slate-300 dark:border-slate-500' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className='profile-actions dark:bg-slate-500 dark:border-slate-700'>
                        <li className='dark:text-slate-200 dark:hover:bg-slate-400'>
                            Profile
                        </li>
                        <li onClick={handleLogout} className='dark:text-slate-200 dark:hover:bg-slate-400'>
                            Log out
                        </li>
                    </ul>
                    :
                    <></>}
        </div>
    )
}