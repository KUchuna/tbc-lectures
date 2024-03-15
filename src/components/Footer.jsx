import '../styles/Footer.css'
import footerLogo from '../assets/headerlogo.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'


export default function Footer() {
    return (
        <footer className="footer-container">
            <div className='footer-up-container'>
                <div className='footer-up-left-container'>
                    <img src={footerLogo} alt='footer-logo' />
                    <ul className='footer-list-container'>
                        <li className='footer-list-item'>Overview</li>
                        <li className='footer-list-item'>Features</li>
                        <li className='footer-list-item'>Pricing</li>
                        <li className='footer-list-item'>Careers</li>
                        <li className='footer-list-item'>Help</li>
                        <li className='footer-list-item'>Privacy</li>
                    </ul>
                </div>
                <div className='footer-up-right-container'>
                    <span className='subscribe-text'>Stay up to date</span>
                    <form className='subscription-form' action=''>
                        <input type='email' name='email' placeholder='Enter your email'  className='input-email'/>
                        <input type='submit' value="SUBSCRIBE" className='input-submit'/>
                    </form>
                </div>
            </div>
            
            {/* temporary for assignment */}

            {/*
            <div className='footer-down-container'>
                <span>
                © 2077 MOVAN. All rights reserved.
                </span>
                <ul className='footer-socials-container'>
                    <li className='footer-socials-item'><img src={twitter} alt='twitter' /></li>
                    <li className='footer-socials-item'><img src={linkedin} alt='twitter' /></li>
                    <li className='footer-socials-item'><img src={facebook} alt='twitter' /></li>
                </ul>
            </div>
    */}
        </footer>
    )
}