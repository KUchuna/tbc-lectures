import '../styles/ContactInfo.css'
import Image from 'next/image'

export default function ContactInfo(props) {
    return (
        <div className="contact-info-container">
            <Image src={props.img} />
            <h4>{props.name}</h4>
            <span className='dark:text-slate-100 mb-3 text-xm'>{props.desc}</span>
            <span className='text-orange-600 font-bold'>{props.info}</span>
        </div>
    )
}