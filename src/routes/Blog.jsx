import BlogCard from "../components/BlogCard";
import blogData from "../blogData";
import '../styles/Blog.css'


export default function Blog() {

    const mappedBlog = blogData.map(card => {
        return <BlogCard 
                    img={card.img}
                    date={card.date}
                    title={card.title}
                    desc={card.desc}
                    style='blog-page-card-container'
                />
    })

    return (
        <div className="blog-page-container">
            <div className="blog-page-title-container">
                <span className="blog-page-short-title">BLOG</span>
                <h1 className="blog-page-title">read our latest blog</h1>
                <p className="blog-page-desc">Insights, Tips, and News for Car Enthusiasts</p>
            </div>
            <div className="blog-page-cards-container">
                {mappedBlog}
            </div>
        </div>
    )
}