import BlogCard from "../components/BlogCard";
import blogData from "../blogData";
import '../styles/BlogServices.css'
import FilterInput from '../components/FilterInput.jsx'
import React from "react";

export default function Blog() {

    const [open, setOpen] = React.useState(false)

    const mappedBlog = blogData.map(card => {
        return <BlogCard 
                    img={card.img}
                    date={card.date}
                    title={card.title}
                    desc={card.desc}
                    style='blog-page-card-container'
                    key={card.id}
                />
    })

    function handleClick() {
        setOpen(prevState => !prevState)
        console.log(open)
    }

    return (
        <div className="blog-page-container">
            <div className="blog-service-page-title-container parent-flex-column-center">
                <span className="blog-service-page-short-title">BLOG</span>
                <h1 className="blog-service-page-title">read our latest blog</h1>
                <p className="blog-service-page-desc">Insights, Tips, and News for Car Enthusiasts</p>
            </div>
            <div className="parent-flex-column-center">
                <div className="sorting-container">
                    <span>Sort by:</span>
                        <FilterInput 
                            dropDownDefault='None'
                            sortingStyle='sorting-dropdown-container'
                            onClick={handleClick}
                        />
                </div>
                <div className="blog-page-cards-container parent-flex-row-center">
                    {mappedBlog}
                </div>
            </div>
        </div>
    )
}