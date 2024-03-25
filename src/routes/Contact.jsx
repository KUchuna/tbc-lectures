import '../styles/Contact.css'
import ContactInfo from '../components/ContactInfo'
import contactemail from '../assets/contactemail.svg'
import contactlocation from '../assets/contactlocation.svg'
import contactphone from '../assets/contactlocation.svg'
import ContactInput from '../components/ContactInput.jsx'



export default function Contact() {
    return (
        <div className="contact-page-container">
            <div className="contact-above-section-container">
                <div className="contact-title-container">
                    <span id="contact-us">Contact us</span>
                    <h1 id='contact-title'>We’d love to hear from you</h1>
                    <span id='contact-subtitle'>Our friendly team is always here to chat.</span>
                </div>
                <div className='contact-info-cards-container'>
                    <ContactInfo 
                        img={contactemail}
                        name='Email'
                        desc="Our friendly team is here to help."
                        info="hi@movan.com"
                    />
                    <ContactInfo 
                        img={contactlocation}
                        name='Office'
                        desc="Come say hello at our office HQ."
                        info="100 Smith Street Collingwood VIC 3066 AU"
                    />
                    <ContactInfo 
                        img={contactphone}
                        name='Phone'
                        desc="Mon-Fri from 8am to 5pm."
                        info="+995 555 555 555"
                    />
                </div>
            </div>
            <div className='contact-below-section-container'>
                <ContactInput 
                    label="Full name"
                    type="text"
                    placeholder='Full name'
                />
                <ContactInput 
                    label="Email"
                    type="email"
                    placeholder='example@example.com'
                />
                <ContactInput 
                    label="Phone number"
                    type="text"
                    placeholder='+995 555 555 555'
                />
                <ContactInput 
                    label="Message"
                    type="text"
                    textarea
                    placeholder="Leave us a message..."
                />
                <button className='contact-button'>CONTACT</button>
            </div>
        </div>
    )
}