import '@/styles/Contact.css'
import ContactInfo from '@/components/ContactInfo'
import contactemail from '@/public/assets/contactemail.svg'
import contactlocation from '@/public/assets/contactlocation.svg'
import contactphone from '@/public/assets/contactphone.svg'
import ContactInput from '@/components/ContactInput.tsx'



export default function Contact() {
    return (
        <div className="contact-page-container parent-flex-column-center dark:bg-slate-900">
            <div className="contact-above-section-container parent-max-width parent-flex-column-center">
                <div className="contact-title-container">
                    <span id="contact-us">Contact us</span>
                    <h1 id='contact-title' className='font-bold'>We’d love to hear from you</h1>
                    <span className='text-page-subtitle text-xl dark:text-slate-400'>Our friendly team is always here to chat.</span>
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
            <div className='contact-below-section-container parent-flex-column-center dark:bg-slate-700'>
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