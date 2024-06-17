import '@/styles/BlogServices.css'
import React from 'react'
import AllServices from '@/components/AllServices';

export default async function Services() {

    return (
        <div className="services-page-container dark:bg-slate-800">
            <div className="md:py-[40px] md:px-[40px] py-[64px] px-[16px] lg:px-[112px] lg:py-[96px] bg-section-grey parent-flex-column-center dark:bg-slate-900 rounded-br-[20px] rounded-bl-[20px]">
                <span className="blog-service-page-short-title">SERVICES</span>
                <h1 className="blog-service-page-title font-bold md:text-3xl lg:text-5xl text-3xl text-center">Choose and book service with us</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400 text-center">Trust us to ensure your car performs at its best, providing you with safety and peace of mind on the road.</p>
            </div>
                <AllServices />
        </div>
    )
}