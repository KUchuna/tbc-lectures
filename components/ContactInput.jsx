import '../styles/ContactInput.css'

export default function ContactInput(props) {

    return (
        <div className="contact-input-container">
            <span>{props.label}</span>
            {props.textarea ? <textarea placeholder={props.placeholder}></textarea>
            :
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onchange}
                name={props.name}
                />}
        </div>
    )
}