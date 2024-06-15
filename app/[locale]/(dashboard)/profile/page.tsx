'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();


  if (user) {
    const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");
    console.log(user.role)
    console.log(isAdmin)
  }


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user)
  return (
      user && (
          <div className='min-h-[calc(100vh-460px)]'>
            {user.picture &&
                <Image src={user.picture} alt='' width={30} height={30}/>
            }
            <h2>{user.nickname}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}