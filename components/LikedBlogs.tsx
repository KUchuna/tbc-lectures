"use client"

import { useState, useEffect } from "react";
import { getBlogs } from "@/api";
import FancyLoading from "./FancyLoading";
import BlogCard from "./BlogCard";
import { useScopedI18n } from "@/locales/client";

interface LikedBlogsProps {
  likedBlogIds: number[];
}

export default function LikedBlogs({ likedBlogIds }: LikedBlogsProps) {
  const [likedBlogs, setLikedBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLikedBlogs = async () => {
      setLoading(true);
      try {
        const blogs = await getBlogs();
        const filteredBlogs = blogs.filter((blog: any) =>
          likedBlogIds.includes(blog.id)
        );
        setLikedBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedBlogs();
  }, [likedBlogIds]);


  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
};

  const scopedT = useScopedI18n('likedblogs')

  return (
    <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-8 md:px-[30px] pr-[16px] overflow-y-auto max-h-[900px] md:max-w-[700px] max-w-[300px]">
      {loading ? (
        <FancyLoading />
      ) : likedBlogs.length === 0 ? (
        <h1 className="font-bold md:text-4xl text-2xl uppercase w-full flex justify-center align-center h-full">
          {scopedT('empty')}
        </h1>
      ) : (
        likedBlogs.map((card) => {
          
          const formattedDate = formatDate(card.date);
          
          return (
            <BlogCard 
                img={card.image}
                title={card.title}
                desc={card.short_description}
                key={card.id}
                date={formattedDate}
                likes={card.likes}
                id={card.id}
                profilepage
            />
        );
        }
        
        )
      )}
    </div>
  );
}
