"use client";

import servicearrow from '../public/assets/servicearrow.svg'
import '../styles/Card.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function ServiceCard(props) {

    const router = useRouter()

    function handleClick() {
        props.servicepage && router.push(`/services/${props.id}`)
    }
    
    return (
        <div className={`card-container ${props.contStyle}`} onClick={handleClick}>
            <Image src={props.img} className={`card-img ${props.imgStyle}`} width={300} height={300}/>
            <span className='card-date'>{props.date}</span>
            <h3 className='card-title'>{props.title}</h3>
            <p className={`card-description ${props.descStyle}`}>{props.desc}</p>
            <span className='card-full-info'>View full information <Image src={servicearrow} alt="" /></span>
        </div>
    )
}