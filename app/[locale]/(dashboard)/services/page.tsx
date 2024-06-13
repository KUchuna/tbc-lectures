import '@/styles/BlogServices.css'
import React from 'react'
import AllServices from '@/components/AllServices';

export default async function Services() {

    //aq da servis sectionshi 2 jer xxdeba bazis gamodzaxeba
    //gadasatania an axal komponentshi an fasaertianebeli!!!!!
    return (
        <div className="services-page-container">
            <div className="blog-service-page-title-container parent-flex-column-center dark:bg-slate-900">
                <span className="blog-service-page-short-title">SERVICES</span>
                <h1 className="blog-service-page-title font-bold">Choose and book service with us</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
                <AllServices />
        </div>
    )
}