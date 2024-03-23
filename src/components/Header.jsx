import '../styles/Header.css'
import headerLogo from '../assets/headerlogo.svg'
import profileLogo from '../assets/profilelogo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header-container'>
            <div className='header-left-section-container'>
                <img src={headerLogo} className='header-logo' alt='header logo'/>
                <ul className='header-list-container'>
                    <li className='header-list-item'><Link to='/home'>Home</Link></li>
                    <li className='header-list-item'>Services</li>
                    <li className='header-list-item'>About Us</li>
                    <li className='header-list-item'><Link to='/contact'>Contact Us</Link></li>
                    <li className='header-list-item'>FAQ</li>
                </ul>
            </div>
                <span className='profile-button'>
                    <img src={profileLogo} alt='profile' />
                </span>
        </header>
    )
}