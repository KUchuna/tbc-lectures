import BlogCard from "../components/BlogCard";
import blogData from "../blogData";
import '../styles/BlogServices.css'
import FilterInput from '../components/FilterInput.jsx'
import React from "react";

export default function Blog() {

    const [open, setOpen] = React.useState(false)
    const [selection, setSelection] = React.useState("None")
    const [blogCards, setBlogCards] = React.useState(blogData)
    const [sorted, setSorted] = React.useState(false)


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
    }

    function handleSort() {
        console.log(selection)
        console.log(blogCards)
        console.log(sorted)
        if(selection == "Date ascending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateA - dateB
            }))
            setSorted(true)
        }else if(selection == "Date descending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB - dateA
            }))
            setSorted(true)
        }
    }

    function removeSort() {
        if(sorted) {
            setSorted(false)
            setBlogCards(blogData)
            setSelection("None")
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
                    <button className="sorting-button" onClick={sorted ? removeSort : handleSort}>{sorted ? "Remove Sorting" : "Apply"}</button>
                </div>
                <div className="blog-page-cards-container parent-flex-row-center">
                    {mappedBlog}
                </div>
            </div>
        </div>
    )
}