'use client'

import { createUserAction } from '@/app/actions.ts';
import React from 'react';

export default function AddUser() {

    const [open, setOpen] = React.useState(false)

    function handleOpen() {
        setOpen(true)
    }

    return (
        <div>
            <button onClick={handleOpen} className='bg-slate-400 p-3 rounded-xl mb-10 mt-[200px]'>Add new user</button>
            {open && <form action={createUserAction} className="translate-x-[-50%] left-[50%] rounded-xl h-[400px] flex flex-col gap-4 w-[500px] text-black absolute bg-slate-700 p-10 py-20">
                        <input type="text" name="name" className='h-[40px] rounded-lg'/>
                        <input type="text" name="email" className='h-[40px] rounded-lg'/>
                        <input type="text" name="age" className='h-[40px] rounded-lg'/>
                        <button type="submit" className="bg-red-500 text-white h-[40px] rounded-lg mt-auto">
                            Create User
                        </button>
                    </form>}
        </div>
    )
}