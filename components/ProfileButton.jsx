'use client'

import Image from 'next/image';
import profileLogo from '../public/assets/profilelogo.svg'
import React from 'react';
import LogOut from './LogOut';

export default function ProfileButton(props) {

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



    return (
        <div className='profile-button' onClick={handleMenu} ref={containerRef}>
            <Image src={profileLogo} alt='profile' id='profile-image'/>

            {menu ? <ul className='profile-actions'>
                        <li>
                            Profile
                        </li>
                        <li>
                            <LogOut 
                            onclick={props.handlelogout}
                            />
                        </li>
                    </ul>
                    :
                    <></>}
        </div>
    )
}