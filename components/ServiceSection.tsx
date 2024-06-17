import linkarrow from '../public/assets/uprightarrow.svg'
import '../styles/Section.css'
import ServiceCard from './ServiceCard.tsx'
import Link from 'next/link';
import Image from 'next/image';
import {getServices} from '@/api.ts'

interface ServiceSection {
    homePage?: boolean,
    searchValue?: string,
    descStyle?: string,
    defaultService?: any,
    searchedService?: any,
    setSearchedService?: any,
    setDefaultService?: any,
    setSearchValue?: any,
    servicePage?: boolean,
    handleSearch?: any,
}

export default async function ServiceSection(props: ServiceSection) {

    const services = await getServices()
    
    let mappedServices;
    
    mappedServices = services.slice(0,6).map((card: any) => {
        return <ServiceCard 
                    img={card.image}
                    title={card.title}
                    desc={card.short_description}
                    imgStyle='service-card-img'
                    descStyle='service-card-desc'
                    key={card.id}
                    id={card.id}
               />
    })


    return (
        <section className="py-[64px] xl:px-[112px] md:px-[40px] lg:py-[96px] px-[16px] parent-flex-column-center service-section dark:bg-slate-800" id='services'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Services</span>
                    {props.homePage ? <Link href='/services' className='hidden md:block'><span className="section-link dark:text-slate-400">View all services<Image src={linkarrow} alt='' /></span></Link> : <></>}
                </div>
                <h3 className="md:text-4xl font-bold md:mb-5 mb-3 text-3xl text-center md:text-left">Comprehensive Car Care Services</h3>
                <p className={`section-description ${props.descStyle} dark:text-slate-400 md:mb-[64px] mb-[32px]`}>Explore our range of professional car services designed to keep your vehicle in top condition.</p>
                
                <div className="md:grid md:grid-cols-[1fr_1fr_1fr] gap-[25px] flex flex-col flex-wrap justify-center items-center">
                    {mappedServices}
                </div>
                <Link href='/services' className='md:hidden flex w-full justify-center border-[1px] h-[48px] rounded-xl mt-[24px]  border-border-grey'><span className="section-link dark:text-slate-400">View all services<Image src={linkarrow} alt='' /></span></Link>
            </div>
        </section>
    )
}