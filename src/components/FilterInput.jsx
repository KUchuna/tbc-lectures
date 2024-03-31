import "../styles/FilterInput.css"
import dropDown from '../assets/dropdown.svg'


export default function FilterInput(props) {

    const currentDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16)
    return (
        <div className="filter-input-dropdown-container">
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
            </div>)}
        </div>
    )
}