'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import '@/styles/ThemeSelector.css'
import sunsvg from '@/public/assets/sun.svg'
import moonsvg from '@/public/assets/moon.svg'
import Image from 'next/image'

export default function ThemeSelector() {
    const { setTheme, resolvedTheme } = useTheme()
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(resolvedTheme === 'dark');
    }, [resolvedTheme]);

    const handleCheckboxChange = () => {
        const newCheckedStatus = !isChecked
        setIsChecked(newCheckedStatus)
        setTheme(newCheckedStatus ? 'dark' : 'light')
    }

    return (
        <div className="flex items-center w-[100px] gap-2">
            <Image src={sunsvg} alt='sun' width={25} height={25}/> 
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <Image src={moonsvg} alt='moon' width={25} height={25}/>
        </div>
    )
}
