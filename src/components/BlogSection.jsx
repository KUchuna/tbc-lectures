import { Link } from 'react-router-dom'
import '../styles/Section.css'
import linkarrow from '../assets/uprightarrow.svg'
import blogData from '../blogData'
import BlogCard from './BlogCard'

export default function BlogSection() {

    const mappedBlog = blogData.slice(0,3).map(card => {
        return <BlogCard 
                    img={card.img}
                    date={card.date}
                    title={card.title}
                    desc={card.desc}
                    key={card.id}
                />
    })

    return (
        <section className="section-container parent-flex-column-center">
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Our blog</span>
                    <Link to='/blog'><span className="section-link">View all posts<img src={linkarrow} alt='' /></span></Link>
                </div>
                <h3 className="section-title">latest blog posts</h3>
                <p className="section-description">Tool and strategies modern teams need to help their companies grow.</p>
                <div className="section-cards-container">
                    {mappedBlog}
                </div>
            </div>
        </section>
    )
}