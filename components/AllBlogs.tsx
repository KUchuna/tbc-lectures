"use client"

import React from 'react';
import { getBlogs } from '@/api';
import FancyLoading from './FancyLoading';
import BlogCard from './BlogCard';
import FilterInput from './FilterInput';

interface Card {
    short_description: string;
    full_description: string;
    title: string;
    date: any;
    id: number;
    likes: number;
    image: string;
}

export default function AllBlogs() {
    const [blogCards, setBlogCards] = React.useState<Card[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [defaultBlog, setDefaultBlog] = React.useState<Card[]>([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                const blogs = await getBlogs();
                setBlogCards(blogs);
                setDefaultBlog(blogs)
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const [open, setOpen] = React.useState<boolean>(false)
    const [selection, setSelection] = React.useState<string>("Sort by:")

    function handleClick() {
        setOpen(prevState => !prevState)
    }

    function storeSelection(option: string) {
        setSelection(option)
        if(option == "Date ascending") {
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
        }else if (option === "Mostly liked") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => b.likes - a.likes));
        } else if (option === "Least liked") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => a.likes - b.likes));
        } else if (option === "Sort by:") {
            setBlogCards(defaultBlog);
        }
    }


    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return date.toLocaleDateString('en-GB', options);
    };

    let mappedBlog = null;

    if (blogCards) {
        mappedBlog = blogCards.map((card: Card) => {
            const formattedDate = formatDate(card.date);

            return (
                <BlogCard 
                    img={card.image}
                    title={card.title}
                    desc={card.short_description}
                    style='blog-page-card-container'
                    key={card.id}
                    date={formattedDate}
                    likes={card.likes}
                    id={card.id}
                    blogpage
                />
            );
        });
    }
    
    return (
        <div className='xl:pt-[96px] md:pt-[40px] py-[30px] px-[16px] md:px-[40px] xl:px-[112px] flex flex-col items-center service-section dark:bg-slate-800'>
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title text-light-orange">Blog posts</span>
                </div>
                <h3 className="text-4xl font-bold mb-5">Latest blog posts</h3>
                <p className='section-description services-section-desc dark:text-slate-400'> Stay informed with our expert advice and tips on car maintenance, repair, and care.</p>
            </div>
            <div className='flex w-full max-w-[1216px]'>
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
            <div className={loading ? "" : "md:grid md:grid-cols-[1fr_1fr_1fr] gap-[25px] flex flex-col flex-wrap justify-center items-center md:py-[60px] py-[40px]"}>
                {loading ? <FancyLoading /> : mappedBlog}
            </div>
        </div>
    );
}
