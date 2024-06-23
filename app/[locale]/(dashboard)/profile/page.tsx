"use server"

import Image from 'next/image';
import { getSession } from "@auth0/nextjs-auth0";
import UploadButton from '@/components/UploadButton';
import { getAvatar, getCurrentUser } from '@/api';
import { redirect } from 'next/navigation';
import { list } from '@vercel/blob';
import defaultPicture from '@/public/assets/defaultprofile.jpg';
import UsernameInput from '@/components/UsernameInput.tsx'


export default async function Profile() {
  const data = await getSession();
  let user, avatar, postgressUser;

  if (data) {
    user = data.user;
    avatar = await getAvatar(user.sub);
    postgressUser = await getCurrentUser(user.sub)
  } else {
    redirect('/');
  }

  const response = await list();

  let avatarExists = false;

  if (avatar) {
    avatarExists = response.blobs.some(blob => blob.url === avatar);
  }

  const avatarSrc = avatarExists ? avatar : defaultPicture;


  return (
    user && (
      <div className='flex flex-col md:pl-[50px] pl-[16px] pb-[200px]'>
        <h1 className='md:text-4xl text-2xl text-center md:text-left uppercase font-bold md:mb-[50px] mb-[25px]'>Information about you</h1>
        <div>
          <div className='flex md:flex-row flex-col items-center mb-[35px] md:gap-7 gap-4'>
            <Image src={avatarSrc} alt='' width={100} height={100} quality={100} priority className='min-w-[150px] max-h-[150px] object-cover rounded-full border-[2px] border-light-orange'/>
            <UploadButton 
              avatar={avatar}
            />
          </div>
          <div className='flex flex-col gap-5'>
            <UsernameInput 
              postgressUser = {postgressUser}
            />
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-lg text-gray-600'>Email</span>
              <span className='md:text-lg text-sm border-[1px] rounded-xl px-[10px] py-[11px] border-slate-300 cursor-not-allowed'>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
