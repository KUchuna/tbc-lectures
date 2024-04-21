import "../styles/Filter.css"
import FilterInput from "./FilterInput"
import location from "../public/assets/location.svg"
import idnumber from "../public/assets/idnumber.svg"
import phone from "../public/assets/phone.svg"

export default function Filter() {
    return (
        <div className="filter-container dark:bg-slate-800 dark:border-slate-600">
            <div className="filter-inputs-container">
                <FilterInput
                    isMainFilter 
                    label = "Choose City"
                    dropDownDefault = "Tbilisi"
                    />
                <FilterInput
                    isMainFilter 
                    isText
                    label = "Pick-up location"
                    inputImg = {location}
                    inputPlaceHolder = "Mukhiani, III district, I. Noneshvili st"
                    />
                <FilterInput
                    isMainFilter 
                    label = "Choose car type"
                    dropDownDefault = "Sedan"
                    />
                <FilterInput
                    isMainFilter 
                    label = "Date of reservation"
                    dropDownDefault = "Polishing"
                    isDate
                    />
            </div>
            <div className="filter-inputs-container">
                <FilterInput
                    isMainFilter 
                        label = "Choose service"
                        dropDownDefault = "Polishing"
                        />
                <FilterInput
                    isMainFilter 
                    label = "Choose additional service"
                    dropDownDefault = "Odor removal"
                />
                <FilterInput
                    isMainFilter 
                    isText
                    label = "Enter ID number"
                    inputImg = {idnumber}
                    inputPlaceHolder = "1234567890"
                />
                <FilterInput
                    isMainFilter 
                    isText
                    label = "Enter mobile number"
                    inputImg = {phone}
                    inputPlaceHolder = "+995 555 555 555"
                />
            </div>
            <div className="filter-confirm-container">
                <span className="filter-price dark:text-white">₾60</span>
                <button className="filter-button">Book an appointment</button>
            </div>
        </div>
    )
}