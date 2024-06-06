"use client";

import '../styles/Card.css'
import blogarrow from '../public/assets/uprightarrow.svg'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

interface BlogCard {
    blogpage?: boolean,
    id?: number,
    style?: string,
    img: string | StaticImageData,
    reactions?: number,
    title: string,
    desc: string,
    date?: string
}

export default function BlogCard(props: BlogCard) {

    const router = useRouter()

    function handleClick() {
        props.blogpage && router.push(`/blogs/${props.id}`)
    }

    return (
        <div className={`blog-card-container card-container ${props.style} dark:bg-slate-700`} onClick={handleClick}>
            <Image src={props.img} className='card-img' alt=''/>
            <span className='card-date'>Date: {props.date}</span>
            <h3 className='card-title'>{props.title}<Image src={blogarrow} alt='' /></h3>
            <p className='card-description dark:text-slate-300'>{props.desc}</p>
        </div>
    )
}