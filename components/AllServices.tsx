"use client"

import React from 'react'
import AddService from './AddService'
import ServiceSearch from './ServiceSearch'
import ServiceCard from './ServiceCard'
import '../styles/Section.css'
import FancyLoading from './FancyLoading'
import { useUser } from '@auth0/nextjs-auth0/client';

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
    


    React.useEffect(() => {
        
        const fetchData = async () => {
            try {
                setLoading(true)
                await new Promise(resolve => setTimeout(resolve, 2000))
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-services`);
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                if (!data || !data.users || !Array.isArray(data.users.rows)) {
                    throw new Error('Invalid response format: missing or invalid data');
                }
                setSearchedService(data.users.rows);
                setDefaultService(data.users.rows);
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

    return (
        <div className='section-container parent-flex-column-center service-section dark:bg-slate-800'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Services</span>
                </div>
                <h3 className="text-4xl font-bold mb-5">Get your finances right</h3>
                <p className='section-description services-section-desc dark:text-slate-400'>We offer the best accounting and expense tracking for ambitious businesses.</p>
            </div>
            <div className='flex flex-col w-full 2xl:max-w-[1216px]'>
                <AddService />
                <ServiceSearch 
                    handleSearch={handleSearch}
                />
            </div>
            <div className={loading ? "" : 'service-cards-container'}>
                {loading ? <FancyLoading /> : mappedServices}
            </div>
        </div>
    )
}