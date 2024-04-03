"use client";

import '../styles/Header.css'
import headerLogo from '../public/assets/headerLogo.svg'
import profileLogo from '../public/assets/profilelogo.svg'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
            <Link href='/profile'>
                <span className='profile-button'>
                    <Image src={profileLogo} alt='profile' />
                </span>
            </Link>
            </div>
        </header>
    )
}