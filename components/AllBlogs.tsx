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
    const [selection, setSelection] = React.useState<string>("None")

    function handleClick() {
        setOpen(prevState => !prevState)
    }

    function storeSelection(option: string) {
        setSelection(option)
        if(option == "ascending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA: any = new Date(a.date)
                const dateB: any = new Date(b.date)
                return dateA - dateB
            }))
        }else if(option == "descending") {
            setBlogCards(prevBlogCards => [...prevBlogCards].sort((a, b) => {
                const dateA: any = new Date(a.date)
                const dateB: any = new Date(b.date)
                return dateB - dateA
            }))
        }else if(option == "None") {
            setBlogCards(defaultBlog)
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
        <div>
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
            <div className={loading ? "" : "blog-page-cards-container dark:bg-slate-800"}>
                {loading ? <FancyLoading /> : mappedBlog}
            </div>
        </div>
    );
}
