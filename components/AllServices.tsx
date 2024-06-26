"use client"

import React from 'react'
import AddService from './AddService'
import ServiceSearch from './ServiceSearch'
import ServiceCard from './ServiceCard'
import '../styles/Section.css'
import FancyLoading from './FancyLoading'
import { useUser } from '@auth0/nextjs-auth0/client';
import { getServices } from '@/api'
import { useI18n, useScopedI18n } from '@/locales/client'

interface Service {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    auth_id: string,
}

export default function AllServices() {

    const { user } = useUser();

    const [searchedService, setSearchedService] = React.useState<Service[]>([])
    const [defaultService, setDefaultService] = React.useState<Service[]>([])
    const [searchValue, setSearchValue] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    let auth_id:any;

    user ? auth_id = user?.sub : auth_id = null
    
    const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000))
            const services = await getServices();
            setSearchedService(services);
            setDefaultService(services);
      
          } catch (error) {
            console.error('Error fetching services:', error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
      

    function handleSearch (value:string) {
        setSearchedService(defaultService.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
        setSearchValue(value)
    }

    let mappedServices;
    

    searchValue === "" ? mappedServices = defaultService.map((card:any) => {
        return <ServiceCard 
                    img={card.image}
                    title={card.title}
                    desc={card.short_description}
                    contStyle='service-card-container'
                    imgStyle='service-card-img'
                    descStyle='service-card-desc'
                    key={card.id}
                    id={card.id}
                    auth_id={auth_id}
                    servicepage
               /> }) : mappedServices = searchedService.map((card:any) => {
                return <ServiceCard 
                            img={card.image}
                            title={card.title}
                            desc={card.short_description}
                            contStyle='service-card-container'
                            imgStyle='service-card-img'
                            descStyle='service-card-desc'
                            key={card.id}
                            id={card.id}
                            auth_id={auth_id}
                            servicepage
                       /> })


    const scopedT = useScopedI18n('services')
    const t = useI18n()

    return (
        <div className='xl:pt-[96px] md:pt-[40px] py-[30px] px-[16px] md:px-[40px] xl:px-[112px] parent-flex-column-center service-section dark:bg-slate-800'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">{t('services')}</span>
                </div>
                <h3 className="text-4xl font-bold mb-5 uppercase">{scopedT('title')}</h3>
                <p className='section-description services-section-desc dark:text-slate-400'>{scopedT('subtitle')}</p>
            </div>
            <div className='flex flex-col w-full lg:max-w-[1216px]'>
                {isAdmin && <AddService />}
                <ServiceSearch 
                    handleSearch={handleSearch}
                />
            </div>
            <div className={loading ? "" : 'md:grid md:grid-cols-[1fr_1fr_1fr] gap-[25px] flex flex-col flex-wrap justify-center items-center md:py-[60px] py-[40px]'}>
                {loading ? <FancyLoading /> : mappedServices}
            </div>
        </div>
    )
}