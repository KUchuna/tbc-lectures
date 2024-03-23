import '../styles/ContactInfo.css'


export default function ContactInfo(props) {
    return (
        <div className="contact-info-container">
            <img src={props.img} />
            <h4>{props.name}</h4>
            <span id='contact-desc'>{props.desc}</span>
            <span id='contact-info'>{props.info}</span>
        </div>
    )
}