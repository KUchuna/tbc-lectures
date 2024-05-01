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
            <span className="filter-input-label dark:text-slate-50">{props.label}</span>
            {props.isText ?
            <div className='filter-input-container dark:bg-slate-600 dark:border-slate-500'>
                <Image src={props.inputImg} alt='' />
                <input type="text" className="filter-input dark:bg-slate-600" placeholder={props.inputPlaceHolder} />
            </div> 
            :
            (props.isDate ?  <div className='filter-input-container dark:bg-slate-600 dark:border-slate-500'>
                                <input type="datetime-local" className="filter-input date-input dark:bg-slate-600 dark:text-slate-50" defaultValue={currentDate} min={currentDate}/>
                             </div> : 
            <div className={`filter-dropdown-container ${props.sortingStyle} dark:bg-slate-600 dark:border-slate-500 dark:text-slate-50`} onClick={props.onClick}>
                {props.dropDownDefault}
                <Image src={dropDown} alt="" />
                {props.open && 
                    <ul className="sorting-menu-container dark:bg-slate-500 dark:border-slate-900">
                        <li className="sorting-menu-item dark:text-slate-200 dark:hover:bg-slate-400" onClick={() => handleSelect("None")}>None</li>
                        <li className="sorting-menu-item dark:text-slate-200 dark:hover:bg-slate-400" onClick={() => handleSelect("Most reactions")}>Most reactions</li>
                        <li className="sorting-menu-item dark:text-slate-200 dark:hover:bg-slate-400" onClick={() => handleSelect("Least reactions")}>Least reactions</li>
                    </ul>
                    }
            </div>)}
        </div>
    )
}