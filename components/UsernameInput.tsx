"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { changeUserNameAction } from '@/app/actions';
import SpinnerLoader from './SpinnerLoader';
import { useScopedI18n } from '@/locales/client';

interface usernameinputprops {
  postgressUser: PostgresUser;
}

interface PostgresUser {
  name: string;

}

export default function UsernameInput(props: usernameinputprops) {
  const { user } = useUser();

  const [newUsername, setNewUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (user && user.nickname && user.sub) {
      setNewUsername(props.postgressUser.name);

    }
  }, [props.postgressUser.name, user, user?.sub]);

  
  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault

    if (user && user.sub) {
      try {
        setLoading(true)
        await changeUserNameAction(user.sub, newUsername);
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false)
      }
    }
  };

  const scopedT = useScopedI18n('profile')

  return (
    <form className='flex flex-col gap-2 items-start' onSubmit={handleSubmit}>
      <span className='font-bold text-lg text-gray-600 dark:text-slate-50'>{scopedT('username')}</span>
      <input
        type='text'
        id='username'
        className='text-sm bg-section-grey focus:outline-none focus:border-[1px] focus:border-light-orange username md:text-lg border-[1px] dark:bg-slate-800 rounded-xl px-[10px] py-[11px] border-slate-300 w-full'
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button
        type='submit'
        className='h-[48px] flex justify-center items-center w-[100px] username-button py-[10px] px-[17px] bg-light-orange hover:bg-dark-orange transition-colors duration-300 rounded-xl text-white font-bold'
        id='username-button'
      >
        {loading ? <SpinnerLoader/> : scopedT('save') }
      </button>
    </form>
  );
}
