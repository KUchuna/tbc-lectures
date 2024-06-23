import { getSession } from "@auth0/nextjs-auth0";
import { getLikedBlogIds } from '@/api';
import LikedBlogs from "@/components/LikedBlogs";
import { getScopedI18n } from "@/locales/server";

export default async function LikedBlogsPage() {

    const data = await getSession();
    let user;
    let likedBlogIds;
  
    if (data) {
      user = data.user;
      const auth_id = user.sub
      likedBlogIds = await getLikedBlogIds(auth_id)
    }

    const scopedT = await getScopedI18n('likedblogs')

    return (
        <div className='md:pl-[70px] pl-[16px] pb-[200px] flex justify-center flex-col w-full items-center'>
            <h1 className="uppercase font-bold md:text-4xl text-2xl mb-[50px] text-center">{scopedT('title')}</h1>
              <LikedBlogs 
                likedBlogIds={likedBlogIds}
              />
        </div>
    )
}