"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UsernameInput() {
  const { user } = useUser();
  const [newUsername, setNewUsername] = useState<string>('');


  useEffect(() => {
    if (user && user.nickname) {
      setNewUsername(user.nickname);
    }
  }, [user]);

  
  return (
    <form className='flex flex-col gap-2 items-start'>
      <span className='font-bold text-lg text-gray-600'>Username</span>
      <input
        type='text'
        id='username'
        className='focus:outline-none focus:border-[1px] focus:border-light-orange username text-lg border-[1px] dark:bg-slate-800 rounded-xl px-[10px] py-[11px] border-slate-300 w-full'
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button
        type='submit'
        className='username-button py-[10px] px-[17px] bg-light-orange hover:bg-dark-orange transition-colors duration-300 rounded-xl text-white font-bold'
        id='username-button'
      >
        Save
      </button>
    </form>
  );
}
