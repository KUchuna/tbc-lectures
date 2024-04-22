"use client";

import '@/styles/BlogServices.css'
import ServiceSection from '@/components/ServiceSection.jsx'
import React from 'react'
// import serviceData from '@/datas/serviceData.js'

export default function Services() {
    
    const [searchedService, setSearchedService] = React.useState([])
    const [defaultService, setDefaultService] = React.useState([])

    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            setSearchedService(res.products)
            setDefaultService(res.products)
        })
    },[])



    function handleSearch (value) {
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