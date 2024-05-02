'use server'

import '../styles/Header.css'
import headerLogo from '../public/assets/headerlogo.svg'
import { logout } from '@/app/[locale]/actions.js';
import Link from 'next/link';
import Image from 'next/image';
import ProfileButton from './ProfileButton';
import ThemeSelector from './ThemeSelector.tsx';
import { getI18n } from '../locales/server.ts'
import LanguageSelector from './LanguageSelector.tsx';

export default async function Header() {

    const t = await getI18n()


    const handleLogout = async () => {
        'use server'
        await logout()
    }

    return (
        <header className='header-container parent-flex-row-center dark:bg-slate-800 dark:border-slate-600'>
            <div className='parent-flex-row-between parent-max-width'>
                <div className='header-left-section-container'>
                    <Link href='/'><Image src={headerLogo} className='header-logo dark:bg-slate-500 dark:p-4 dark:rounded-2xl' alt='header logo'/></Link>
                    <ul className='header-list-container dark:text-slate-300'>
                        <li className='header-list-item'><Link href='/'>{t('home')}</Link></li>
                        <li className='header-list-item'><Link href='/services'>{t('services')}</Link></li>
                        <li className='header-list-item'>{t('about')}</li>
                        <li className='header-list-item'><Link href='/contact'>{t('contact')}</Link></li>
                        <li className='header-list-item'>{t('faq')}</li>
                       
                    </ul>
                </div>
                <div className='flex items-center'>
                    <ProfileButton 
                        handlelogout={handleLogout}
                        />
                     <ThemeSelector />
                     <LanguageSelector />
                </div>
            </div>
        </header>
    )
}