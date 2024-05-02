import "../styles/Filter.css"
import FilterInput from "./FilterInput"
import location from "../public/assets/location.svg"
import idnumber from "../public/assets/idnumber.svg"
import phone from "../public/assets/phone.svg"
import { getI18n, getScopedI18n } from '../locales/server.ts'


export default async function Filter() {

    const scopedT = await getScopedI18n('filter.label')
    const t = await getI18n()

    return (
        <div className="filter-container dark:bg-slate-800 dark:border-slate-600">
            <div className="filter-inputs-container">
                <FilterInput
                    isMainFilter 
                    label = {scopedT('city')}
                    dropDownDefault = "Tbilisi"
                    />
                <FilterInput
                    isMainFilter 
                    isText
                    label = {scopedT('pickup')}
                    inputImg = {location}
                    inputPlaceHolder = "Mukhiani, III district, I. Noneshvili st"
                    />
                <FilterInput
                    isMainFilter 
                    label = {scopedT('cartype')}
                    dropDownDefault = "Sedan"
                    />
                <FilterInput
                    isMainFilter 
                    label = {scopedT('date')}
                    dropDownDefault = "Polishing"
                    isDate
                    />
            </div>
            <div className="filter-inputs-container">
                <FilterInput
                    isMainFilter 
                        label = {scopedT('service')}
                        dropDownDefault = "Polishing"
                        />
                <FilterInput
                    isMainFilter 
                    label = {scopedT('additional')}
                    dropDownDefault = "Odor removal"
                />
                <FilterInput
                    isMainFilter 
                    isText
                    label = {scopedT('id')}
                    inputImg = {idnumber}
                    inputPlaceHolder = "1234567890"
                />
                <FilterInput
                    isMainFilter 
                    isText
                    label = {scopedT('phone')}
                    inputImg = {phone}
                    inputPlaceHolder = "+995 555 555 555"
                />
            </div>
            <div className="filter-confirm-container">
                <span className="filter-price dark:text-white">₾60</span>
                <button className="filter-button">{t('filter.button')}</button>
            </div>
        </div>
    )
}