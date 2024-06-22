import Link from 'next/link'
import '../styles/Section.css'
import linkarrow from '../public/assets/uprightarrow.svg'
import BlogCard from './BlogCard'
import Image from 'next/image'
import { getBlogs } from '@/api.ts'
import { getScopedI18n } from '@/locales/server'


interface Card {
    short_description: string;
    full_description: string;
    title: string;
    date: any;
    id: number;
    image: string;
    likes:number
}

export default async function BlogSection() {

    const blogs = await getBlogs()

    const sortedBlogs = blogs.sort((a:any, b:any) => {
                    const dateA: any = new Date(a.date)
                    const dateB: any = new Date(b.date)
                    return dateA - dateB
                })

    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return date.toLocaleDateString('en-GB', options);
    };

    const mappedBlog = sortedBlogs.slice(0,3).map((card: Card) => {
        const formattedDate = formatDate(card.date);
        return <BlogCard 
                    img={card.image}
                    date={formattedDate}
                    title={card.title}
                    desc={card.short_description}
                    key={card.id}
                    likes={card.likes}
                    id={card.id}
                />
    })


    const scopedT = await getScopedI18n('blog')

    return (
        <section className="section-container md:py-[96px] py-[64px] px-[16px] xl:px-[112px] md:px-[40px] parent-flex-column-center dark:bg-slate-700" id='blog'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">{scopedT('blog')}</span>
                    <Link href='/blogs' className='hidden md:block'><span className="section-link dark:text-slate-400">{scopedT('all')}<Image src={linkarrow} alt='' /></span></Link>
                </div>
                <h3 className="md:text-4xl font-bold md:mb-5 mb-3 text-3xl text-center md:text-left">{scopedT('title')}</h3>
                <p className="section-description dark:text-slate-400 md:mb-[64px] mb-[32px]">{scopedT('subtitle')}</p>
                <div className="md:grid md:grid-cols-[1fr_1fr_1fr] gap-[25px] flex flex-col flex-wrap justify-center items-center">
                    {mappedBlog}
                </div>
                <Link href='/blogs' className='md:hidden flex w-full justify-center border-[1px] h-[48px] rounded-xl mt-[24px]  border-border-grey'><span className="section-link dark:text-slate-400">View all blogposts<Image src={linkarrow} alt='' /></span></Link>
            </div>
        </section>
    )
}