import login from '../assets/login.svg'
import ContactInput from '../components/ContactInput.jsx'
import '../styles/Profile.css'

export default function Profile() {
    return (
        <div className="profile-page-container parent-flex-column-center">
            <div className="profile-title-container parent-flex-column-center">
                <img src={login} alt="" />
                <h4 className='profile-title'>Create new account</h4>
            </div>
            <div className='profile-form-container'>
                <ContactInput 
                    label='Name'
                    placeholder='Enter your full name'
                    default='Ucha Kobakhidze'
                />
                <ContactInput 
                    label='Email'
                    placeholder='Enter your email'
                    type='email'
                    default='uchakobakhidze@gmail.com'
                />
                <ContactInput 
                    label='Phone number'
                    placeholder='Enter your phone number'
                    default='+995 555 555 555'
                />
                <ContactInput 
                    label='Password'
                    placeholder='Enter your password'
                    type='password'
                />
                <ContactInput 
                    label='Confirm password'
                    placeholder='Confirm your password'
                    type='password'
                />
                <button className='profile-verify'>VERIFY</button>
            </div>
        </div>
    )
}