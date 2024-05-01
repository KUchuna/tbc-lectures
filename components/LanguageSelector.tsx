'use client'
import {useChangeLocale, useCurrentLocale} from '@/locales/client'
import React from 'react'

export default function LanguageSelector() {
    const [open, setOpen] = React.useState(false)

    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();


    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className='dark:border-slate-900 select-none relative ml-[20px] border-[#EAECF0] border bg-white dark:bg-slate-500 p-2 rounded-xl cursor-pointer' onClick={handleOpen}>
            {currentLocale}
            {open && 
            <ul className=' py-3 absolute bg-white border border-[#EAECF0] rounded-xl top-0 left-[50%] translate-y-[50%] translate-x-[-50%] dark:bg-slate-500 dark:text-slate-200 dark:border-slate-900'>
                <li className='hover:bg-[#eeeded] w-full p-3' onClick={() => changeLocale('en')}>English</li>    
                <li className='hover:bg-[#eeeded] w-full p-3' onClick={() => changeLocale('ge')}>Georgian</li>    
            </ul>}
        </div>
    )
}