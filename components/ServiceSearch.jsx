import '../styles/ServiceSearch.css'
import search from '../public/assets/search.svg'
import React from 'react'
import Image from 'next/image';

export default function ServiceSearch(props) {
    
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
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
            <div className='service-search-content '>
                <input type="text" className="service-search-input" onChange={handleChange} placeholder='Search for service'/>
                <Image src={search} alt="" />
            </div>
        </div>
    )
}