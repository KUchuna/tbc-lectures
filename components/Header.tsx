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


export default async function Header() {

    const t = await getI18n()
    const user = await getSession()

    const isAdmin = Array.isArray(user?.user.role) && user.user.role.includes("admin");
  

    return (
        <header className='header-container parent-flex-row-center dark:bg-slate-800 dark:border-slate-600'>
            <div className='parent-flex-row-between parent-max-width'>
                <div className='header-left-section-container'>
                    <Link href='/'><Image src={headerLogo} className='header-logo dark:bg-slate-500 dark:p-4 dark:rounded-2xl' alt='header logo'/></Link>
                    <ul className='header-list-container dark:text-slate-300'>
                        <li className='header-list-item'><Link href='/'>{t('home')}</Link></li>
                        <li className='header-list-item'><Link href='/#services'>{t('services')}</Link></li>
                        <li className='header-list-item'><Link href='/#blog'>{t('Blog')}</Link></li>
                        <li className='header-list-item'><Link href='/contact'>{t('contact')}</Link></li>
                        <li className='header-list-item'><a href='/#faq'>{t('faq')}</a></li>
                        {isAdmin && <li className='header-list-item'><Link href='/admin'>{t('admin')}</Link></li>}
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <ThemeSelector />
                        <LanguageSelector />
                    </div>
                    <HeaderBookings />
                    <ProfileButton />
                </div>
            </div>
        </header>
    )
}