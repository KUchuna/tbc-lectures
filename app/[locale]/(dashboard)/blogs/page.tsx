"use client";

import BlogCard from "@/components/BlogCard.tsx";
import '@/styles/BlogServices.css'
import FilterInput from '@/components/FilterInput.tsx'
import React from "react";
import defblog from '@/public/assets/defblog.webp'
import blogData from "@/datas/blogData";

export default function Blog() {

    interface BlogCard {
        desc: string,
        title: string,
        date: any,
        id: number,
    }

    const [open, setOpen] = React.useState(false)
    const [selection, setSelection] = React.useState("None")
    const [blogCards, setBlogCards] = React.useState<BlogCard[]>(blogData)


    const mappedBlog = blogCards.map((card: BlogCard) => {
        return <BlogCard 
                    img={defblog}
                    title={card.title}
                    desc={card.desc}
                    style='blog-page-card-container'
                    key={card.id}
                    date={card.date}
                    id={card.id}
                    blogpage
                />
    })

    function handleClick() {
        setOpen(prevState => !prevState)
    }



    function storeSelection(option: string) {
        setSelection(option)
        if(option == "Date ascending") {
            console.log("date ascending")
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA: any = new Date(a.date)
                const dateB: any = new Date(b.date)
                return dateA - dateB
            }))
        }else if(option == "Date descending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA: any = new Date(a.date)
                const dateB: any = new Date(b.date)
                return dateB - dateA
            }))
            console.log("date descending")
            console.log(blogCards)
        }else if(option == "None") {
            setBlogCards(blogData)
        }
    }
    
    return (
        <div className="blog-page-container dark:bg-slate-800">
            <div className="md:py-[40px] md:px-[40px] py-[64px] px-[16px] lg:px-[112px] lg:py-[96px] bg-section-grey parent-flex-column-center dark:bg-slate-900 rounded-br-[20px] rounded-bl-[20px]">
                <span className="blog-service-page-short-title">BLOG</span>
                <h1 className="blog-service-page-title font-bold md:text-3xl lg:text-5xl text-3xl text-center">read our latest blog</h1>
                <p className="blog-service-page-desc text-page-subtitle text-xl dark:text-slate-400 text-center">Insights, Tips, and News for Car Enthusiasts</p>
            </div>
            <div className="parent-flex-column-center">
                <div className="sorting-container dark:bg-slate-800 w-full h-full mt-10">
                    <span>Sort by:</span>
                        <FilterInput 
                            dropDownDefault={selection}
                            sortingStyle='sorting-dropdown-container'
                            contStyle='sorting-parent-container'
                            onClick={handleClick}
                            open={open}
                            selection={selection}
                            storeSelection={storeSelection}
                        />
                </div>
                <div className="blog-page-cards-container dark:bg-slate-800">
                    {mappedBlog}
                </div>
            </div>
        </div>
    )
}