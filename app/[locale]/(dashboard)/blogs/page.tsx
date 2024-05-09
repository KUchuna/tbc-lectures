"use client";

import BlogCard from "@/components/BlogCard.tsx";
import '@/styles/BlogServices.css'
import FilterInput from '@/components/FilterInput.tsx'
import React from "react";
import defblog from '@/public/assets/defblog.webp'

export default function Blog() {

    interface BlogCard {
        reactions: number,
        title: string,
        body: string,
        id: number,
    }

    const [open, setOpen] = React.useState(false)
    const [selection, setSelection] = React.useState("None")
    const [blogCards, setBlogCards] = React.useState<BlogCard[]>([])
    const [defaultSorting, setDefaultSorting] = React.useState([])

    React.useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(res => {
            setBlogCards(res.posts)
            setDefaultSorting(res.posts)
        })
    },[])

    

    const mappedBlog = blogCards.map((card: BlogCard) => {
        return <BlogCard 
                    img={defblog}
                    reactions={card.reactions}
                    title={card.title}
                    desc={card.body}
                    style='blog-page-card-container'
                    key={card.id}
                    id={card.id}
                    blogpage
                />
    })

    function handleClick() {
        setOpen(prevState => !prevState)
    }



    function storeSelection(option: string) {
        setSelection(option)
        if(option == "Least reactions") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => a.reactions - b.reactions))
        }else if(option == "Most reactions") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => b.reactions - a.reactions))
        }else if(option == "None") {
            setBlogCards(defaultSorting)
        }
    }
    
    return (
        <div className="blog-page-container dark:bg-slate-800">
            <div className="blog-service-page-title-container parent-flex-column-center dark:bg-slate-900">
                <span className="blog-service-page-short-title">BLOG</span>
                <h1 className="blog-service-page-title font-bold">read our latest blog</h1>
                <p className="blog-service-page-desc dark:text-slate-400">Insights, Tips, and News for Car Enthusiasts</p>
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