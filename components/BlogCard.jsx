"use client";

import '../styles/Card.css'
import blogarrow from '../public/assets/uprightarrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BlogCard(props) {

    const router = useRouter()

    function handleClick() {
        router.push(`/blog/${props.id}`)
    }

    return (
        <div className={`card-container ${props.style}`} onClick={handleClick}>
            <Image src={props.img} className='card-img'/>
            <span className='card-date'>{props.reactionsText}{props.reactions}</span>
            <h3 className='card-title'>{props.title}<Image src={blogarrow} alt='' /></h3>
            <p className='card-description'>{props.desc}</p>
        </div>
    )
}