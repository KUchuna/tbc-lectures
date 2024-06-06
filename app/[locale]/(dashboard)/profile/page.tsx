'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user && (
          <div className='min-h-[calc(100vh-460px)]'>
            {user.picture &&
                <Image src={user.picture} alt='' width={30} height={30}/>
            }
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}