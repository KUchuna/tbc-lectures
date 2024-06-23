import '@/styles/Contact.css'
import ContactInfo from '@/components/ContactInfo'
import contactemail from '@/public/assets/contactemail.svg'
import contactlocation from '@/public/assets/contactlocation.svg'
import contactphone from '@/public/assets/contactphone.svg'
import ContactInput from '@/components/ContactInput.tsx'
import { getScopedI18n } from '@/locales/server'


export default async function Contact() {

    const scopedT = await getScopedI18n('contact')

    return (
        <div className="contact-page-container parent-flex-column-center dark:bg-slate-900">
            <div className="rounded-b-xl md:py-[40px] md:px-[40px] py-[64px] px-[16px] lg:px-[112px] lg:py-[96px] bg-section-grey parent-flex-column-center dark:bg-slate-900 rounded-br-[20px] rounded-bl-[20px]">
                <div className="contact-title-container">
                    <span id="contact-us" className='uppercase'>{scopedT('contact')}</span>
                    <h1 className='font-bold text-center lg:text-5xl text-3xl uppercase mb-[23px]'>{scopedT('title')}</h1>
                    <span className='text-page-subtitle text-xl dark:text-slate-400 text-center'>{scopedT('subtitle')}</span>
                </div>
                <div className='contact-info-cards-container md:pt-[96px] pt-[64px] gap-3 md:gap-0'>
                    <ContactInfo 
                        img={contactemail}
                        name={scopedT('info1.name')}
                        desc={scopedT('info1.desc')}
                        info={scopedT('info1.address')}
                    />
                    <ContactInfo 
                        img={contactlocation}
                        name={scopedT('info2.name')}
                        desc={scopedT('info2.desc')}
                        info={scopedT('info2.address')}
                    />
                    <ContactInfo 
                        img={contactphone}
                        name={scopedT('info3.name')}
                        desc={scopedT('info3.desc')}
                        info={scopedT('info3.address')}
                    />
                </div>
            </div>
            <div className='contact-below-section-container md:py-[96px] md:px-[112px] px-[16px] py-[64px] parent-flex-column-center dark:bg-slate-700'>
                <ContactInput 
                    label={scopedT('input1.label')}
                    type="text"
                    placeholder={scopedT('input1.placeholder')}
                />
                <ContactInput 
                    label={scopedT('input2.label')}
                    type="email"
                    placeholder={scopedT('input2.placeholder')}
                />
                <ContactInput 
                    label={scopedT('input3.label')}
                    type="text"
                    placeholder={scopedT('input3.placeholder')}
                />
                <ContactInput 
                    label={scopedT('input4.label')}
                    type="text"
                    textarea
                    placeholder={scopedT('input4.placeholder')}
                />
                <button className='contact-button'>{scopedT('button')}</button>
            </div>
        </div>
    )
}