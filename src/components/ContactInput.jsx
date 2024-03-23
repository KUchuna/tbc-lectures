import '../styles/ContactInput.css'

export default function ContactInfo(props) {
    return (
        <div className="contact-input-container">
            <span>{props.label}</span>
            {props.textarea ? <textarea placeholder={props.placeholder}></textarea>
            :
            <input type={props.type} placeholder={props.placeholder}></input>}
        </div>
    )
}