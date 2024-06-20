"use client";

import '../styles/Card.css'
import blogarrow from '../public/assets/uprightarrow.svg'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import LikeUnlikeBlog from './LikeUnlikeBlog';

interface BlogCard {
    blogpage?: boolean,
    profilepage?: boolean,
    id?: number,
    style?: string,
    img: string | StaticImageData,
    reactions?: number,
    title: string,
    desc: string,
    date?: string;
    likes: number;
}

export default function BlogCard(props: BlogCard) {

    const router = useRouter()

    function handleClick() {
        props.blogpage || props.profilepage && router.push(`/blogs/${props.id}`)
    }

    return (
        <div className={props.profilepage ? "card-container" : "hover:scale-[105%] md:transition-transform md:duration-300 card-container ${props.style} dark:bg-slate-700"} onClick={handleClick}>
            <Image src={props.img} className='card-img md:mb-32px mb-[16px]' width={384} height={240} quality={100} priority alt=''/>
            <div className='flex justify-between w-full'>
                <span className='card-date'>{props.date}</span>
                <span className='card-date'>Total likes: {props.likes}</span>
            </div>
            <h3 className='card-title md:text-xl text-lg'>{props.title}<Image src={blogarrow} alt='' /></h3>
            <p className='card-description dark:text-slate-300'>{props.desc}</p>
            {props.profilepage && 
                <div>
                    
                </div>
            }
        </div>
    )
}