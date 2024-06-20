"use client"

import { useState, useEffect } from "react";
import { getBlogs } from "@/api";
import FancyLoading from "./FancyLoading";
import Image from "next/image";
import BlogCard from "./BlogCard";

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

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-8 px-[30px] overflow-y-auto max-h-[900px] flex-wrap max-w-[800px]">
      {loading ? (
        <FancyLoading />
      ) : likedBlogs.length === 0 ? (
        <h1 className="font-bold text-4xl uppercase w-full flex justify-center align-center h-full">
          You do not have any liked blogs.
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
