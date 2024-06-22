import Image from 'next/image';
import { getSession } from "@auth0/nextjs-auth0";
import UploadButton from '@/components/UploadButton';
import { getAvatar } from '@/api';
import { redirect } from 'next/navigation';
import { list } from '@vercel/blob';
import defaultPicture from '@/public/assets/defaultprofile.jpg';


export default async function Profile() {
  const data = await getSession();
  let user, avatar;

  if (data) {
    user = data.user;
    avatar = await getAvatar(user.sub);

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
      <div className='flex flex-col pl-[50px] pb-[200px]'>
        <h1 className='text-4xl uppercase font-bold mb-[50px]'>Information about you</h1>
        <div>
          <div className='flex items-center mb-[35px] gap-7'>
            <Image src={avatarSrc} alt='' width={100} height={100} className='rounded-full border-[2px] border-light-orange'/>
            <UploadButton 
              avatar={avatar}
            />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-lg text-gray-600'>Username</span>
              <span className='text-lg border-[1px] rounded-xl px-[10px] py-[11px] border-slate-300'>{user.nickname}</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-lg text-gray-600'>Email</span>
              <span className='text-lg border-[1px] rounded-xl px-[10px] py-[11px] border-slate-300'>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
