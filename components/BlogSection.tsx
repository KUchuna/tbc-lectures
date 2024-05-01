import Link from 'next/link'
import '../styles/Section.css'
import linkarrow from '../public/assets/uprightarrow.svg'
import blogData from '../datas/blogData.js'
import BlogCard from './BlogCard'
import Image from 'next/image'

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
        <section className="section-container parent-flex-column-center dark:bg-slate-700">
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Our blog</span>
                    <Link href='/blogs'><span className="section-link dark:text-slate-400">View all posts<Image src={linkarrow} alt='' /></span></Link>
                </div>
                <h3 className="text-4xl font-bold mb-5">Latest blog posts</h3>
                <p className="section-description dark:text-slate-400">Tool and strategies modern teams need to help their companies grow.</p>
                <div className="section-cards-container">
                    {mappedBlog}
                </div>
            </div>
        </section>
    )
}