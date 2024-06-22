import '@/styles/BlogServices.css'
import React from "react";
import AllBlogs from '@/components/AllBlogs';
import { getScopedI18n } from '@/locales/server';


export default async function Blog() {

    const scopedT = await getScopedI18n('blogs.page') 

    return (
        <div className="blog-page-container dark:bg-slate-800">
            <div className="md:py-[40px] md:px-[40px] py-[64px] px-[16px] lg:px-[112px] lg:py-[96px] bg-section-grey parent-flex-column-center dark:bg-slate-900 rounded-br-[20px] rounded-bl-[20px]">
                <span className="blog-service-page-short-title">{scopedT('blog')}</span>
                <h1 className="blog-service-page-title font-bold md:text-3xl lg:text-5xl text-3xl text-center">{scopedT('title')}</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400 text-center">{scopedT('subtitle')}</p>
            </div>
            <AllBlogs />
        </div>
    )
}