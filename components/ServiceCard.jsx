import servicearrow from '../assets/servicearrow.svg'
import '../styles/Card.css'

export default function ServiceCard(props) {
    return (
        <div className={`card-container ${props.contStyle}`}>
            <img src={props.img} className={`card-img ${props.imgStyle}`}/>
            <span className='card-date'>{props.date}</span>
            <h3 className='card-title'>{props.title}</h3>
            <p className={`card-description ${props.descStyle}`}>{props.desc}</p>
            <span className='card-full-info'>View full information <img src={servicearrow} alt="" /></span>
        </div>
    )
}