'use client'

import Image from 'next/image';
import profileLogo from '../public/assets/profilelogo.svg'
import React from 'react';
import { redirect } from "next/navigation"


export default function ProfileButton({ handlelogout }) {

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

    function handleClick() {
        handlelogout()
        redirect('/login')
    }

    return (
        <div className='profile-button dark:bg-slate-300 dark:border-slate-500' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className='profile-actions'>
                        <li>
                            Profile
                        </li>
                        <li onClick={handleClick}>
                            Log out
                        </li>
                    </ul>
                    :
                    <></>}
        </div>
    )
}