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
        <section className="section-container md:py-[96px] py-[64px] px-[16px] xl:px-[112px] md:px-[40px] parent-flex-column-center dark:bg-slate-700" id='blog'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Our blog</span>
                    <Link href='/blogs' className='hidden md:block'><span className="section-link dark:text-slate-400">View all blogposts<Image src={linkarrow} alt='' /></span></Link>
                </div>
                <h3 className="md:text-4xl font-bold md:mb-5 mb-3 text-3xl text-center md:text-left">Latest blog posts</h3>
                <p className="section-description dark:text-slate-400 md:mb-[64px] mb-[32px]">Stay informed with our expert advice and tips on car maintenance, repair, and care.</p>
                <div className="md:grid md:grid-cols-[1fr_1fr_1fr] gap-[25px] flex flex-col flex-wrap justify-center items-center">
                    {mappedBlog}
                </div>
                <Link href='/blogs' className='md:hidden flex w-full justify-center border-[1px] h-[48px] rounded-xl mt-[24px]  border-border-grey'><span className="section-link dark:text-slate-400">View all blogposts<Image src={linkarrow} alt='' /></span></Link>
            </div>
        </section>
    )
}