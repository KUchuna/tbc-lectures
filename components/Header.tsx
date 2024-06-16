'use server'

import '../styles/Header.css'
import headerLogo from '../public/assets/headerlogo.svg'
import Link from 'next/link';
import Image from 'next/image';
import ProfileButton from './ProfileButton';
import ThemeSelector from './ThemeSelector.tsx';
import { getI18n } from '../locales/server.ts'
import LanguageSelector from './LanguageSelector.tsx';
import HeaderBookings from './HeaderBookings.tsx';
import { getSession } from '@auth0/nextjs-auth0';
import Hamburger from './Hamburger.tsx';

export default async function Header() {

    const t = await getI18n()
    const user = await getSession()

    const isAdmin = Array.isArray(user?.user.role) && user.user.role.includes("admin");
  

    return (
        <header className='relative header-container parent-flex-row-center dark:bg-slate-800 dark:border-slate-600 xl:px-[112px] md:px-[40px] py-[18px] px-[16px]'>
            <div className='flex md:justify-between items-center md:max-w-[1216px] w-full'>
                <div className='header-left-section-container'>
                    <Link href='/'><Image src={headerLogo} className='xl:mr-[80px] md:mr-[30px] dark:bg-slate-500 dark:p-4 dark:rounded-2xl' alt='header logo'/></Link>
                    <ul className='header-list-container md:flex hidden dark:text-slate-300 gap-[20px]'>
                        <li className='header-list-item'><Link href='/'>{t('home')}</Link></li>
                        <li className='header-list-item'><Link href='/services'>{t('services')}</Link></li>
                        <li className='header-list-item'><Link href='/blogs'>{t('Blog')}</Link></li>
                        <li className='header-list-item'><Link href='/contact'>{t('contact')}</Link></li>
                        <li className='header-list-item'><a href='/#faq'>{t('faq')}</a></li>
                        {isAdmin && <li className='header-list-item'><Link href='/admin'>{t('admin')}</Link></li>}
                    </ul>
                </div>
                
                <div className='md:flex items-center xl:gap-4 md:gap-6 ml-auto md:ml-0 mr-[40px] md:mr-0'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <ThemeSelector />
                        <LanguageSelector />
                    </div>
                    <HeaderBookings />
                    <ProfileButton />
                </div>
                <Hamburger />
            </div>
        </header>
    )
}