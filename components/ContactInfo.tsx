import '../styles/ContactInfo.css'
import Image, { StaticImageData } from 'next/image'

interface ContactInfo {
    img: string | StaticImageData;
    name: string;
    desc: string;
    info: string;
}

export default function ContactInfo(props: ContactInfo) {
    return (
        <div className="contact-info-container">
            <Image src={props.img} alt='' className='md:mb-[20px] mb-[10px]'/>
            <h4>{props.name}</h4>
            <span className='dark:text-slate-100 mb-3 text-sm md:text-lg text-center'>{props.desc}</span>
            <span className='text-orange-600 font-bold text-sm text-center md:text-lg'>{props.info}</span>
        </div>
    )
}