"use client"

import React from 'react'
import { addServiceAction } from '@/app/actions'

export default function AddService() {

    const [open, setOpen] = React.useState(false)

    function handleOpen() {
        setOpen(!open)
    }



    return (
        <div>
        <button className='py-[12px] w-[150px] text-white bg-service-card-orange rounded-xl' onClick={handleOpen}>Add new Service</button>
        {open && 
            <form action={addServiceAction} className="z-10 translate-x-[-50%] left-[50%] rounded-xl h-fit flex flex-col gap-4 w-[500px] text-black absolute bg-slate-700 p-10">
                        <span className='text-slate-200 font-bold'>All of the fields are required, use indicated format if needed!!</span>
                        <input type="text" name="title" placeholder='Enter title' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <input type="text" name="short_description" placeholder='Enter short description' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg  outline-none'/>
                        <input type="text" name="sub_title" placeholder='Enter sub title' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <textarea name="full_description" placeholder='Enter full description' className='min-h-[300px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'></textarea>
                        <input type="text" name="price" placeholder='Enter price with decimals (ex: 10.00)' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <input type="text" name="total_time_needed" placeholder='Enter time (ex: 2h 10m)' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <input type="text" name="image" placeholder='Enter image direct link' className='min-h-[40px] rounded-lg dark:bg-slate-600 px-3 text-lg outline-none'/>
                        <button type="submit" className="bg-red-500 text-white h-[40px] rounded-lg mt-auto">
                            Add service
                        </button>
            </form>}
        </div>
    )
}