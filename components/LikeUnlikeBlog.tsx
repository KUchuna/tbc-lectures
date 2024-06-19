"use client"

import Image from 'next/image';
import favsvg from '@/public/assets/fav.svg'
import unfavsvg from '@/public/assets/unfav.svg'
import { likeBlogAction, unlikeBlogAction } from "@/app/actions";
import { useUser } from '@auth0/nextjs-auth0/client';

interface LikeUnlikeBlog {
    id: number;
    likes: number;
}


export default function LikeUnlikeBlog(props: LikeUnlikeBlog) {

    const { user } = useUser();
    let auth_id:any;

    user ? auth_id = user?.sub : auth_id = null

    async function handleBlogLike(blog_id: number, auth_id:string, action:string) {
        await likeBlogAction(blog_id, auth_id, action)
    }

    async function handleBlogUnlike(blog_id: number, auth_id:string, action:string) {
        await unlikeBlogAction(blog_id, auth_id, action)
    }

    return (
        <>
            <Image src={unfavsvg} width={15} height={15} alt='like' className="cursor-pointer" onClick={() => props.id !== undefined && handleBlogUnlike(props.id, auth_id, "unlike")}/>
                Liked by {props.likes} user(s) 
            <Image src={favsvg} width={15} height={15} alt="unlike" className="cursor-pointer" onClick={() => props.id !== undefined && handleBlogLike(props.id, auth_id, "like")}/>
        </>
    )
}