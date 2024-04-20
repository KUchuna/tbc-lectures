'use server'

import '../styles/Header.css'
import headerLogo from '../public/assets/headerlogo.svg'
import LogOut from './LogOut.jsx';
import { logout } from '@/app/actions';
import Link from 'next/link';
import Image from 'next/image';
import ProfileButton from './ProfileButton';

export default async function Header() {

    const handleClick = async () => {
        'use server'
        await logout()
    }

    return (
        <header className='header-container parent-flex-row-center'>
            <div className='parent-flex-row-between parent-max-width'>
                <div className='header-left-section-container'>
                    <Link href='/'><Image src={headerLogo} className='header-logo' alt='header logo'/></Link>
                    <ul className='header-list-container'>
                        <li className='header-list-item'><Link href='/'>Home</Link></li>
                        <li className='header-list-item'><Link href='/services'>Services</Link></li>
                        <li className='header-list-item'>About Us</li>
                        <li className='header-list-item'><Link href='/contact'>Contact Us</Link></li>
                        <li className='header-list-item'>FAQ</li>
                    </ul>
                </div>
                    <ProfileButton 
                        handlelogout={handleClick}
                    />
            </div>
        </header>
    )
}