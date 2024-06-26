import '../styles/Footer.css'
import footerLogo from '../public/assets/headerlogo.svg'
import twitter from '../public/assets/twitter.svg'
import linkedin from '../public/assets/linkedin.svg'
import facebook from '../public/assets/facebook.svg'
import reddit from '@/public/assets/reddit.svg'
import Image from 'next/image'
import { getScopedI18n } from '@/locales/server'

export default async function Footer() {

    const scopedT = await getScopedI18n('footer')

    return (
        <footer className="footer-container md:py-[64px] py-[32px] px-[16px] xl:px-[112px] md:px-[40px] parent-flex-column-center dark:bg-slate-800 dark:border-slate-600">
            <div className='footer-up-container parent-max-width flex md:justify-between md:flex-row md:items-center flex-col'>
                <div className='mb-[48px] md:mb-0'>
                    <Image src={footerLogo} alt='footer-logo' className='dark:bg-slate-500 dark:p-4 dark:rounded-2xl'/>
                    <ul className='grid grid-cols-[1fr_1fr] md:flex md:flex-row md:flex-wrap footer-list-container xl:gap-[32px] md:gap-[16px] dark:text-slate-200'>
                        <li className='footer-list-item'>{scopedT('item1')}</li>
                        <li className='footer-list-item'>{scopedT('item2')}</li>
                        <li className='footer-list-item'>{scopedT('item3')}</li>
                        <li className='footer-list-item'>{scopedT('item4')}</li>
                        <li className='footer-list-item'>{scopedT('item5')}</li>
                        <li className='footer-list-item'>{scopedT('item6')}</li>
                    </ul>
                </div>
                <div className='footer-up-right-container'>
                    <span className='subscribe-text dark:text-slate-200'>{scopedT('label')}</span>
                    <form className=' xl:mt-[16px] md:mt-0 md:ml-auto flex flex-col gap-3 mt-[16px] xl:block' action=''>
                        <input type='email' name='email' placeholder='Enter your email'  className='input-email xl:mr-[16px] md:mr-0 dark:bg-white'/>
                        <button type='submit' className='input-submit'>{scopedT('button')}</button>
                    </form>
                </div>
            </div>
            <div className='footer-down-container parent-max-width'>
                <span className='dark:text-slate-300'>{scopedT('rights')}</span>
                <ul className='footer-socials-container'>
                    <li className='footer-socials-item'><Image src={twitter} alt='twitter' /></li>
                    <li className='footer-socials-item'><Image src={linkedin} alt='twitter' /></li>
                    <li className='footer-socials-item'><Image src={facebook} alt='twitter' /></li>
                    <li className='footer-socials-item'><Image src={reddit} alt='twitter' /></li>
                </ul>
            </div>
        </footer>
    )
}