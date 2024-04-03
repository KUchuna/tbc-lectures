import '../styles/ContactInfo.css'
import Image from 'next/image'

export default function ContactInfo(props) {
    return (
        <div className="contact-info-container">
            <Image src={props.img} />
            <h4>{props.name}</h4>
            <span id='contact-desc'>{props.desc}</span>
            <span id='contact-info'>{props.info}</span>
        </div>
    )
}