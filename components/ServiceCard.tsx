"use client"

import servicearrow from '../public/assets/servicearrow.svg'
import '../styles/Card.css'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import {createCartItemAction} from '../app/actions'
 
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
    handleClick?: () => void;
}
 
export default function ServiceCard(props: ServiceCard) {
 
 
 
    const router = useRouter()
 
    function handleClick() {
        router.push(`/services/${props.id}`)
    }
   
    async function handleCartItem(id: number) {
        await createCartItemAction(id)
    }
 
 
    return (
        <div className={`card-container ${props.contStyle} dark:bg-slate-600 ${props.servicepage ? null : "hover:scale-[105%] transition-transform duration-300"}`}>
            <div onClick={handleClick}>
                <Image src={props.img} className={`card-img ${props.imgStyle}`} width={300} height={300} alt=''/>
                <span className='card-date'>{props.date}</span>
                <h3 className='text-xl font-bold mb-5 dark:text-slate-200'>{props.title}</h3>
                <p className={`card-description ${props.descStyle} dark:text-slate-50`}>{props.desc.slice(0,100)}...</p>
            </div>
            {props.servicepage ?
            <div className='w-full mt-auto flex justify-center gap-4'>
                <button className='text-white flex  dark:text-white bg-service-card-orange px-3 py-2 rounded-xl hover:bg-service-card-hover-orange transition-colors duration-300' 
                onClick={() => props.id !== undefined && handleCartItem(props.id)}>Add to cart</button>
            </div>
            :<span className='text-service-card-orange flex mt-auto dark:text-orange-700'>View full information <Image className='ml-6' src={servicearrow} alt="" /></span>}
        </div>
    )
}