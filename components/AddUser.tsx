'use client'

import { createUserAction } from '@/app/actions.ts';
import React from 'react';

export default function AddUser() {

    const [open, setOpen] = React.useState(false)

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div>
            <button onClick={handleOpen} className='bg-slate-400 p-3 rounded-xl mb-10 mt-[200px]'>{open ? "Close form" : "Add new user"}</button>
            {open && 
            <form action={createUserAction} className="translate-x-[-50%] left-[50%] rounded-xl h-[400px] flex flex-col gap-4 w-[500px] text-black absolute bg-slate-700 p-10 py-20">
                        <input type="text" name="name" placeholder='Enter name' className='h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg text-white outline-none'/>
                        <input type="text" name="email" placeholder='Enter email' className='h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg text-white outline-none'/>
                        <input type="text" name="age" placeholder='Enter age' className='h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg text-white outline-none'/>
                        <button type="submit" className="bg-red-500 text-white h-[40px] rounded-lg mt-auto">
                            Create User
                        </button>
            </form>}
        </div>
    )
}