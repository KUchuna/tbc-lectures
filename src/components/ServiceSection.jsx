import { Link } from "react-router-dom"
import linkarrow from '../assets/uprightarrow.svg'
import '../styles/Section.css'
import serviceData from "../ServiceData.js"
import ServiceCard from '../components/ServiceCard.jsx'

export default function ServiceSection(props) {

    const mappedServices = serviceData.map(card => {
        return <ServiceCard 
                    img={card.img}
                    title={card.title}
                    desc={card.desc}
                    contStyle='service-card-container'
                    imgStyle='service-card-img'
               />
    })

    return (
        <section className="section-container parent-flex-column-center service-section">
            <div className='parent-max-width'>
                <div className="section-short-title-link-container"> 
                    <span className="section-short-title">Services</span>
                    {props.homePage ? <Link to='/services'><span className="section-link">View all services<img src={linkarrow} alt='' /></span></Link> : <></>}
                </div>
                <h3 className="section-title">Get your finances right</h3>
                <p className="section-description">We offer the best accounting and expense tracking for ambitious businesses.</p>
                <div className="service-cards-container">
                    {mappedServices}
                </div>
            </div>
        </section>
    )
}