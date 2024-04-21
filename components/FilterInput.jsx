import "../styles/FilterInput.css"
import dropDown from '../public/assets/dropdown.svg'
import React from "react"
import Image from "next/image"

export default function FilterInput(props) {

    const currentDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16)

    function handleSelect(option) {
       props.storeSelection(option)
    }


    return (
        <div className={props.isMainFilter ? "filter-input-dropdown-container" : props.contStyle}>
            <span className="filter-input-label dark:text-slate-300">{props.label}</span>
            {props.isText ?
            <div className='filter-input-container dark:bg-white'>
                <Image src={props.inputImg} alt='' />
                <input type="text" className="filter-input dark:bg-white" placeholder={props.inputPlaceHolder} />
            </div> 
            :
            (props.isDate ?  <div className='filter-input-container dark:bg-white'>
                                <input type="datetime-local" className="filter-input date-input dark:bg-white" defaultValue={currentDate} min={currentDate}/>
                             </div> : 
            <div className={`filter-dropdown-container ${props.sortingStyle} dark:bg-white`} onClick={props.onClick}>
                {props.dropDownDefault}
                <Image src={dropDown} alt="" />
                {props.open && 
                    <ul className="sorting-menu-container">
                        <li className="sorting-menu-item" onClick={() => handleSelect("None")}>None</li>
                        <li className="sorting-menu-item" onClick={() => handleSelect("Most reactions")}>Most reactions</li>
                        <li className="sorting-menu-item" onClick={() => handleSelect("Least reactions")}>Least reactions</li>
                    </ul>
                    }
            </div>)}
        </div>
    )
}