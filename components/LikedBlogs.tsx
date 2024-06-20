"use client"

import { useState, useEffect } from "react";
import { getBlogs } from "@/api";
import FancyLoading from "./FancyLoading";
import Image from "next/image";

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
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const blogs = await getBlogs();
        console.log("Fetched blogs:", blogs);
        console.log("LIKED BLOG IDS", likedBlogIds)
        const filteredBlogs = blogs.filter((blog: any) =>
          likedBlogIds.includes(blog.id)
        );
        console.log("Filtered blogs:", filteredBlogs);
        setLikedBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedBlogs();
  }, [likedBlogIds]);

  return (
    <>
      {loading ? (
        <FancyLoading />
      ) : likedBlogs.length === 0 ? (
        <h1 className="font-bold text-4xl uppercase w-full flex justify-center align-center h-full">
          You do not have any liked blogs.
        </h1>
      ) : (
        likedBlogs.map((blog) => (
          <div key={blog.id} className="mb-4">
            <Image src={blog.image} alt='blog-image' width={300} height={280} />
            <h1 className="font-bold text-2xl">{blog.title}</h1> 
            <p className="text-gray-600">{blog.short_description}</p>
          </div>
        ))
      )}
    </>
  );
}
