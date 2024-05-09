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
            <Image src={props.img} alt=''/>
            <h4>{props.name}</h4>
            <span className='dark:text-slate-100 mb-3 text-xm'>{props.desc}</span>
            <span className='text-orange-600 font-bold'>{props.info}</span>
        </div>
    )
}