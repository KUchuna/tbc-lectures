"use client"

import servicearrow from '../public/assets/servicearrow.svg'
import '../styles/Card.css'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
 
interface ServiceCard {
    id?: number;
    title: string;
    desc: string;
    date?: string;
    img: string | StaticImageData;
    imgStyle: string;
    contStyle?: string;
    descStyle: string;
    servicepage?: boolean;
    auth_id?: any;
    handleClick?: () => void;
}
 
export default function ServiceCard(props: ServiceCard) {
 
 
 
    const router = useRouter()
 
    function handleClick() {
        router.push(`/services/${props.id}`)
    }
    console.log("ID:"+props.id)
    return (
        <div className={`card-container ${props.contStyle} dark:bg-slate-600 hover:scale-[105%] transition-transform duration-300`}>
            <div onClick={handleClick}>
                <Image src={props.img} className={`card-img ${props.imgStyle}`} width={300} height={300} alt=''/>
                <span className='card-date'>{props.date}</span>
                <h3 className='text-xl font-bold mb-5 dark:text-slate-200'>{props.title}</h3>
                <p className={`card-description ${props.descStyle} dark:text-slate-50`}>{props.desc.slice(0,100)}...</p>
            </div>
            <span className='text-service-card-orange flex mt-auto dark:text-orange-700'>View full information <Image className='ml-6' src={servicearrow} alt="" /></span>
        </div>
    )
}