'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import React, { useState, useEffect } from 'react'
import engsvg from "@/public/assets/english.svg"
import geosvg from "@/public/assets/georgian.svg"
import Image from 'next/image'

export default function LanguageSelector() {
    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();
    const [isChecked, setIsChecked] = useState<boolean>(currentLocale === 'ge');

    useEffect(() => {
        setIsChecked(currentLocale === 'ge');
    }, [currentLocale]);

    const handleCheckboxChange = () => {
        const newCheckedStatus = !isChecked;
        setIsChecked(newCheckedStatus);
        changeLocale(newCheckedStatus ? 'ge' : 'en');
    }

    return (
        <div className="flex items-center w-[100px] gap-2">
            <Image src={engsvg} alt='EN' width={25} height={30} className='rounded-full'/>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
             <Image src={geosvg} alt='EN' width={25} height={30}/>
        </div>
    )
}
