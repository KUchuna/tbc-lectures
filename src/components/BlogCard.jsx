import '../styles/BlogCard.css'
import blogarrow from '../assets/uprightarrow.svg'

export default function BlogCard(props) {
    return (
        <div className={`blog-card-container ${props.style}`}>
            <img src={props.img} className='blog-card-img'/>
            <span className='blog-card-date'>{props.date}</span>
            <h3 className='blog-card-title'>{props.title}<img src={blogarrow} alt='' /></h3>
            <p className='blog-card-description'>{props.desc}</p>
        </div>
    )
}