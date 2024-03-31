import '../styles/BlogServices.css'
import ServiceSection from '../components/ServiceSection.jsx'

export default function Services() {
    return (
        <div className="services-page-container">
            <div className="blog-service-page-title-container parent-flex-column-center">
                <span className="blog-service-page-short-title">SERVICES</span>
                <h1 className="blog-service-page-title">Choose and book service with us</h1>
                <p className="blog-service-page-desc">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <ServiceSection />
        </div>
    )
}