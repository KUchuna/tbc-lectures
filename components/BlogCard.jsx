import '../styles/Card.css'
import blogarrow from '../public/assets/uprightarrow.svg'
import Image from 'next/image'

export default function BlogCard(props) {
    return (
        <div className={`card-container ${props.style}`}>
            <Image src={props.img} className='card-img'/>
            <span className='card-date'>{props.date}</span>
            <h3 className='card-title'>{props.title}<img src={blogarrow} alt='' /></h3>
            <p className='card-description'>{props.desc}</p>
        </div>
    )
}