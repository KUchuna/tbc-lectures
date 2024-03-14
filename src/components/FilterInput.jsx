import "../styles/FilterInput.css"
import dropDown from '../assets/dropdown.svg'


export default function FilterInput(props) {
    return (
        <div className="filter-input-dropdown-container">
            <span className="filter-input-label">{props.label}</span>
            {props.isText ?
            <div className='filter-input-container'>
                <img src={props.inputImg} alt='' />
                <input type="text" className="filter-input" placeholder={props.inputPlaceHolder} />
            </div> 
            : 
            <div className="filter-dropdown-container">
                {props.dropDownDefault}
                <img src={dropDown} alt="" />
            </div>}
        </div>
    )
}