import "../styles/Filter.css"
import FilterInput from "./FilterInput"
import location from "../assets/location.svg"
import idnumber from "../assets/idnumber.svg"
import phone from "../assets/phone.svg"

export default function Filter() {
    return (
        <div className="filter-container">
            <div className="filter-inputs-container">
                <FilterInput 
                    label = "Choose City"
                    dropDownDefault = "Tbilisi"
                    />
                <FilterInput 
                    isText
                    label = "Pick-up location"
                    inputImg = {location}
                    inputPlaceHolder = "Mukhiani, III district, I. Noneshvili st"
                    />
                <FilterInput 
                    label = "Choose car type"
                    dropDownDefault = "Sedan"
                    />
                <FilterInput 
                    label = "Choose service"
                    dropDownDefault = "Polishing"
                    />
            </div>
            <div className="filter-inputs-container">
                <FilterInput 
                        label = "Choose service"
                        dropDownDefault = "Polishing"
                        />
                <FilterInput 
                    label = "Choose additional service"
                    dropDownDefault = "Odor removal"
                />
                <FilterInput 
                    isText
                    label = "Enter ID number"
                    inputImg = {idnumber}
                    inputPlaceHolder = "1234567890"
                />
                <FilterInput 
                    isText
                    label = "Enter mobile number"
                    inputImg = {phone}
                    inputPlaceHolder = "+995 555 555 555"
                />
            </div>
        </div>
    )
}