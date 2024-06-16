import '@/styles/BlogServices.css'
import React from 'react'
import AllServices from '@/components/AllServices';

export default async function Services() {

    return (
        <div className="services-page-container dark:bg-slate-800">
            <div className="blog-service-page-title-container parent-flex-column-center dark:bg-slate-900">
                <span className="blog-service-page-short-title">SERVICES</span>
                <h1 className="blog-service-page-title font-bold">Choose and book service with us</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400">Trust us to ensure your car performs at its best, providing you with safety and peace of mind on the road.</p>
            </div>
                <AllServices />
        </div>
    )
}