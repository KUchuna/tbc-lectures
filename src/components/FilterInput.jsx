import "../styles/FilterInput.css"
import dropDown from '../assets/dropdown.svg'
import React from "react"


export default function FilterInput(props) {

    const currentDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16)

    function handleSelect(option) {
       props.storeSelection(option)
       
    }


    return (
        <div className={`filter-input-dropdown-container ${props.contStyle}`}>
            <span className="filter-input-label">{props.label}</span>
            {props.isText ?
            <div className='filter-input-container'>
                <img src={props.inputImg} alt='' />
                <input type="text" className="filter-input" placeholder={props.inputPlaceHolder} />
            </div> 
            :
            (props.isDate ?  <div className='filter-input-container'>
                                <input type="datetime-local" className="filter-input date-input" defaultValue={currentDate} min={currentDate}/>
                             </div> : 
            <div className={`filter-dropdown-container ${props.sortingStyle}`} onClick={props.onClick}>
                {props.dropDownDefault}
                <img src={dropDown} alt="" />
                {props.open && 
                    <ul className="sorting-menu-container">
                        <li className="sorting-menu-item" onClick={() => handleSelect("Date ascending")}>Date ascending</li>
                        <li className="sorting-menu-item" onClick={() => handleSelect("Date descending")}>Date descending</li>
                    </ul>
                    }
            </div>)}
        </div>
    )
}