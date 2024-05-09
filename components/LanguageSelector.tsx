'use client'
import {useChangeLocale, useCurrentLocale} from '@/locales/client'
import React from 'react'

export default function LanguageSelector() {
    const [open, setOpen] = React.useState<Boolean>(false)

    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();
    const containerRef = React.useRef<any>();


    React.useEffect(() => {
        const handleClose = (e:any) => {
            if(e.target != containerRef.current) {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClose)
        return () => {
            document.removeEventListener('click', handleClose)
        }
    }, [])

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className='dark:border-slate-500 select-none relative ml-[20px] border-[#EAECF0] border bg-white dark:bg-slate-300 text-slate-800 p-2 rounded-xl cursor-pointer flex items-center justify-center' onClick={handleOpen} ref={containerRef}>
            {currentLocale=='en' ? "EN" : "GE"}
            {open && 
            <ul className='py-2 absolute bg-white border border-[#EAECF0] rounded-[8px] top-[7px] left-[50%] translate-y-[50%] translate-x-[-50%] dark:bg-slate-500 dark:text-slate-200 dark:border-slate-600 font-bold'>
                <li className='text-[0.9rem] py-[8px] px-[12px] hover:bg-[#eeeded] w-full p-3 transition-colors ease-linear duration-300 dark:hover:bg-slate-400' onClick={() => changeLocale('en')}>English</li>    
                <li className='text-[0.9rem] py-[8px] px-[12px] hover:bg-[#eeeded] w-full p-3 transition-colors ease-linear duration-300 dark:hover:bg-slate-400' onClick={() => changeLocale('ge')}>ქართული</li>    
            </ul>}
        </div>
    )
}