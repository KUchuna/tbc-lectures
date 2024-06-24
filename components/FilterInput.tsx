import "../styles/FilterInput.css"
import dropDown from '../public/assets/dropdown.svg'
import React from "react"
import Image from "next/image"

interface FilterInput {
    isMainFilter?: boolean,
    contStyle?: string,
    label?: string,
    inputImg?: any,
    inputPlaceHolder?: string,
    isText?: boolean,
    isDate?: boolean,
    sortingStyle?: string,
    dropDownDefault?: string,
    onClick?: React.MouseEventHandler,
    open?: boolean,
    storeSelection?: any,
    selection?: string,
}

export default function FilterInput(props: FilterInput) {

    const currentDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16)

    function handleSelect(option: string) {
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
            <div className={`filter-dropdown-container mt-[12px] md:mt-[30px] ${props.sortingStyle} dark:bg-slate-600 dark:border-slate-500 dark:text-slate-50`} onClick={props.onClick}>
                {props.dropDownDefault}
                <Image src={dropDown} alt="" />
                {props.open && 
                    <div className="sorting-menu-container px-[12px] py-[10px] dark:bg-slate-500 dark:border-slate-900" >
                        <span className="sorting-menu-item p-2 w-full dark:text-slate-200 dark:hover:bg-slate-400 text-center border-[1px] rounded-xl" onClick={() => handleSelect("Sort by:")}>Clear filter</span>
                        <div className="flex items-center gap-2 border-b-[1px] py-[8px] w-full">
                            <span className="dark:text-slate-200">Date</span>
                            <ul className="flex flex-col w-full">
                                <li className="sorting-menu-item p-2 w-full rounded-xl dark:text-slate-200 dark:hover:bg-slate-400 text-right" onClick={() => handleSelect("Date ascending")}>Ascending</li>
                                <li className="sorting-menu-item p-2 w-full rounded-xl dark:text-slate-200 dark:hover:bg-slate-400 text-right" onClick={() => handleSelect("Date descending")}>Descending</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2 py-[8px]">
                            <span className="dark:text-slate-200">Likes</span>
                            <ul className="flex flex-col w-full">
                                <li className="sorting-menu-item p-2 w-full rounded-xl dark:text-slate-200 dark:hover:bg-slate-400 text-right" onClick={() => handleSelect("Mostly liked")}>Most</li>
                                <li className="sorting-menu-item p-2 w-full rounded-xl dark:text-slate-200 dark:hover:bg-slate-400 text-right" onClick={() => handleSelect("Least liked")}>Least</li>
                            </ul>
                        </div>
                    </div>
                    }
            </div>)}
        </div>
    )
}