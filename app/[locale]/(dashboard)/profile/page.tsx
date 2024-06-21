import Image from 'next/image';
import { getSession } from "@auth0/nextjs-auth0";
import UploadButton from '@/components/UploadButton';
import { getAvatar } from '@/api';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const data = await getSession();
  let user, avatar;

  if (data) {
    user = data.user;
    avatar = await getAvatar(user.sub);
  } else {
    redirect('/')
  }

  return (
    user && (
      <div className='flex flex-col pl-[50px] pb-[200px]'>
        <h1 className='text-4xl uppercase font-bold mb-[50px]'>Information about you</h1>
        <div>
          <div className='flex items-center mb-[35px] gap-7'>
            {avatar &&
              <Image src={avatar} alt='' width={100} height={100} className='rounded-full'/>
            }
            <UploadButton />
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
