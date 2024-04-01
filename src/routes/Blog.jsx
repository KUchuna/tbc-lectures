import BlogCard from "../components/BlogCard";
import blogData from "../blogData";
import '../styles/BlogServices.css'
import FilterInput from '../components/FilterInput.jsx'
import React from "react";

export default function Blog() {

    const [open, setOpen] = React.useState(false)
    const [selection, setSelection] = React.useState("None")
    const [blogCards, setBlogCards] = React.useState(blogData)

    const mappedBlog = blogCards.map(card => {
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
        
    }

    function storeSelection(option) {
        setSelection(option)
        if(option == "Date ascending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateA - dateB
            }))
        }else if(option == "Date descending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB - dateA
            }))
        }else if(option == "None") {
            setBlogCards(blogData)
        }
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
                            dropDownDefault={selection}
                            sortingStyle='sorting-dropdown-container'
                            contStyle='sorting-parent-container'
                            onClick={handleClick}
                            open={open}
                            selection={selection}
                            storeSelection={storeSelection}
                        />
                </div>
                <div className="blog-page-cards-container">
                    {mappedBlog}
                </div>
            </div>
        </div>
    )
}