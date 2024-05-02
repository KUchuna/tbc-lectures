import '../styles/ServiceSearch.css'
import search from '../public/assets/search.svg'
import React from 'react'
import Image from 'next/image';

export default function ServiceSearch(props) {
    
    const handleChange = (e) => {
        const value = e.target.value;
        debounce(() => {
            props.handleSearch(value);
        }, 1300);
    };

    const debounce = (func, delay) => {
        clearTimeout(debounce.timer);
        debounce.timer = setTimeout(func, delay);
    };

    return (
        <div className="service-search-container">
            <div className='service-search-content dark:bg-slate-500 dark:border-slate-400'>
                <input type="text" className="service-search-input dark:bg-slate-500 dark:text-black" onChange={handleChange} placeholder='Search for service'/>
                <Image className='service-search-icon' src={search} alt="" />
            </div>
        </div>
    )
}