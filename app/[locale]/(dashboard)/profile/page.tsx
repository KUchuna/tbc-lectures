
import Image from 'next/image';
import { getSession } from "@auth0/nextjs-auth0";
import LikedBlogs from '@/components/LikedBlogs.tsx';
import { getLikedBlogIds } from '@/api';

export default async function Profile() {

  const data = await getSession();

  let user;
  let likedBlogIds;

  if (data) {
    user = data.user;
    const auth_id = user.sub
    likedBlogIds = await getLikedBlogIds(auth_id)
  }



  return (
      user && (
          <div className='min-h-[calc(100vh-460px)]'>
            {user.picture &&
                <Image src={user.picture} alt='' width={30} height={30}/>
            }
            <h2>{user.nickname}</h2>
            <p>{user.email}</p>
            <div>
              <LikedBlogs 
                likedBlogIds={likedBlogIds}
              />
            </div>
          </div>
      )
  );
}