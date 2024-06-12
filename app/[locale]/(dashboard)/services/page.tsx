"use client";

import '@/styles/BlogServices.css'
import ServiceSection from '@/components/ServiceSection.tsx'
import React from 'react'

export default function Services() {
    
    interface Product {
        id: number,
        title: string,
        description: string,
        price: number,
        image: string,
        category: string
    }


    const [searchedService, setSearchedService] = React.useState<Product[]>([])
    const [defaultService, setDefaultService] = React.useState<Product[]>([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
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
            }
        };

        fetchData();
    }, []);

    function handleSearch (value:string) {
        setSearchedService(defaultService.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <div className="services-page-container">
            <div className="blog-service-page-title-container parent-flex-column-center dark:bg-slate-900">
                <span className="blog-service-page-short-title">SERVICES</span>
                <h1 className="blog-service-page-title font-bold">Choose and book service with us</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
                <ServiceSection 
                    servicePage
                    descStyle='services-section-desc'
                    handleSearch={handleSearch}
                    searchedService={searchedService}
                    defaultService={defaultService}
                    />
        </div>
    )
}