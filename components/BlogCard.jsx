"use client";

import '../styles/Card.css'
import blogarrow from '../public/assets/uprightarrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BlogCard(props) {

    const router = useRouter()

    function handleClick() {
        props.blogpage && router.push(`/blogs/${props.id}`)
    }

    return (
        <div className={`card-container ${props.style} dark:bg-slate-700`} onClick={handleClick}>
            <Image src={props.img} className='card-img'/>
            <span className='card-date'>{props.reactionsText}{props.reactions}</span>
            <h3 className='card-title'>{props.title}<Image src={blogarrow} alt='' /></h3>
            <p className='card-description dark:text-slate-300'>{props.blogpage ? props.desc.slice(0,150) + "..." : props.desc}</p>
        </div>
    )
}