import linkarrow from '../public/assets/uprightarrow.svg'
import '../styles/Section.css'
import serviceData from "../datas/serviceData.js"
import ServiceCard from '../components/ServiceCard.jsx'
import ServiceSearch from "./ServiceSearch.jsx"
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceSection(props) {

    let mappedServices;

    props.homePage ? mappedServices = serviceData.slice(0,6).map(card => {
        return <ServiceCard 
                    img={card.img}
                    title={card.title}
                    desc={card.desc}
                    contStyle='service-card-container'
                    imgStyle='service-card-img'
                    descStyle='service-card-desc'
                    key={card.id}
               />
    }) : (props.searchValue === "" ? mappedServices = props.defaultService.map(card => {
        return <ServiceCard 
                    img={card.thumbnail}
                    title={card.title}
                    desc={card.description}
                    contStyle='service-card-container'
                    imgStyle='service-card-img'
                    descStyle='service-card-desc'
                    key={card.id}
                    id={card.id}
                    servicepage
               /> }) : mappedServices = props.searchedService.map(card => {
                return <ServiceCard 
                            img={card.thumbnail}
                            title={card.title}
                            desc={card.description}
                            contStyle='service-card-container'
                            imgStyle='service-card-img'
                            descStyle='service-card-desc'
                            key={card.id}
                            id={card.id}
                            servicepage
                       /> }))

    return (
        <section className="section-container parent-flex-column-center service-section">
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Services</span>
                    {props.homePage ? <Link href='/services'><span className="section-link">View all services<Image src={linkarrow} alt='' /></span></Link> : <></>}
                </div>
                <h3 className="section-title">Get your finances right</h3>
                <p className={`section-description ${props.descStyle}`}>We offer the best accounting and expense tracking for ambitious businesses.</p>
                {props.servicePage && 
                <ServiceSearch 
                    handleSearch={props.handleSearch}
                />}
                <div className="service-cards-container">
                    {mappedServices}
                </div>
            </div>
        </section>
    )
}