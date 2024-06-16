import '../styles/Footer.css'
import footerLogo from '../public/assets/headerlogo.svg'
import twitter from '../public/assets/twitter.svg'
import linkedin from '../public/assets/linkedin.svg'
import facebook from '../public/assets/facebook.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer-container py-[64px] xl:px-[112px] md:px-[40px] parent-flex-column-center dark:bg-slate-800 dark:border-slate-600">
            <div className='footer-up-container parent-max-width parent-flex-row-between'>
                <div className='footer-up-left-container'>
                    <Image src={footerLogo} alt='footer-logo' className='dark:bg-slate-500 dark:p-4 dark:rounded-2xl'/>
                    <ul className='footer-list-container xl:gap-[32px] md:gap-[16px] dark:text-slate-200'>
                        <li className='footer-list-item'>Overview</li>
                        <li className='footer-list-item'>Features</li>
                        <li className='footer-list-item'>Pricing</li>
                        <li className='footer-list-item'>Careers</li>
                        <li className='footer-list-item'>Help</li>
                        <li className='footer-list-item'>Privacy</li>
                    </ul>
                </div>
                <div className='footer-up-right-container'>
                    <span className='subscribe-text dark:text-slate-200'>Stay up to date</span>
                    <form className='subscription-form xl:mt-[16px] md:mt-0 md:ml-auto md:flex md:flex-col md:gap-3 xl:block' action=''>
                        <input type='email' name='email' placeholder='Enter your email'  className='input-email xl:mr-[16px] md:mr-0 dark:bg-white'/>
                        <input type='submit' value="SUBSCRIBE" className='input-submit'/>
                    </form>
                </div>
            </div>
            <div className='footer-down-container parent-max-width'>
                <span className='dark:text-slate-300'>© 2077 MOVAN. All rights reserved.</span>
                <ul className='footer-socials-container'>
                    <li className='footer-socials-item'><Image src={twitter} alt='twitter' /></li>
                    <li className='footer-socials-item'><Image src={linkedin} alt='twitter' /></li>
                    <li className='footer-socials-item'><Image src={facebook} alt='twitter' /></li>
                </ul>
            </div>
        </footer>
    )
}