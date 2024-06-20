import { getSession } from "@auth0/nextjs-auth0";
import { getLikedBlogIds } from '@/api';
import LikedBlogs from "@/components/LikedBlogs";

export default async function LikedBlogsPage() {

    const data = await getSession();

    let user;
    let likedBlogIds;
  
    if (data) {
      user = data.user;
      const auth_id = user.sub
      likedBlogIds = await getLikedBlogIds(auth_id)
    }


    return (
        <div className='pl-[70px] pb-[200px]'>
            <h1 className="uppercase font-bold text-4xl mb-[50px] text-center">Blog posts liked by you</h1>
              <LikedBlogs 
                likedBlogIds={likedBlogIds}
              />
        </div>
    )
}