"use client"

import React from 'react'
import { addBlogAction } from '@/app/actions'

export default function AddBlog() {

    const [open, setOpen] = React.useState(false)

    function handleOpen() {
        setOpen(!open)
    }



    return (
        <div>
        <button className='py-[12px] w-[150px] text-white bg-light-orange rounded-xl uppercase font-bold mt-[24px]' onClick={handleOpen}>Add blog</button>
        {open && 
            <form action={addBlogAction} className="z-10 translate-x-[-50%] left-[50%] rounded-xl h-fit flex flex-col gap-4 w-[400px] text-black absolute bg-slate-700 p-10">
                        <span className='text-slate-200 font-bold'>All of the fields are required, use indicated format if needed!!</span>
                        <input type="text" name="title" placeholder='Enter title' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <input type="text" name="short_description" placeholder='Enter short description' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg  outline-none'/>
                        <input type="text" name="sub_title" placeholder='Enter sub title' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <textarea name="full_description" placeholder='Enter full description' className='min-h-[300px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'></textarea>
                        <input type="text" name="date" placeholder='Enter date with (ex: 2024-06-23)' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <input type="text" name="image" placeholder='Enter image direct link' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <button type="submit" className="bg-red-500 text-white h-[40px] rounded-lg mt-auto">
                            Add new blog
                        </button>
            </form>}
        </div>
    )
}