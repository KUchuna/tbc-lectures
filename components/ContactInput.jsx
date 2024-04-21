import '../styles/ContactInput.css'

export default function ContactInput(props) {

    return (
        <div className="contact-input-container">
            <span className='dark:text-white'>{props.label}</span>
            {props.textarea ? <textarea placeholder={props.placeholder} className='dark:bg-white'></textarea>
            :
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onchange}
                name={props.name}
                className='dark:bg-white dark:text-black'
                />}
        </div>
    )
}