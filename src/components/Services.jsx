import ServiceCard from "./ServiceCard"
import "../styles/Services.css"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"
import service5 from "../assets/service5.png"
import service6 from "../assets/service6.png"


export default function Services() {
    return (
        <section className="services-container">
            <ServiceCard 
                img = {service1}
                title = "Paint correction"
                description = "Paint correction is a professional process of restoring and enhancing the appearance of a vehicle's..."
            />
            <ServiceCard 
                img = {service2}
                title = "Paint protection mask"
                description = "A paint protection mask, also known as a clear bra or paint protection film (PPF), is a transparent layer that is appl..."
            />
            <ServiceCard 
                img = {service3}
                title = "Odor removal"
                description = "Offer odor removal services to eliminate unpleasant smells from the car's interior. This can involve using specialized..."
            />
            <ServiceCard 
                img = {service4}
                title = "Interior cleaning"
                description = "Provide a comprehensive interior cleaning service that includes vacuuming carpets and upholstery, wiping down..."
            />
            <ServiceCard 
                img = {service5}
                title = "Exterior wash"
                description = "This includes a thorough cleaning of the car's exterior, removing dirt, dust, and grime. It typically involves hand..."
            />
            <ServiceCard 
                img = {service6}
                title = "Ceramic coating"
                description = "Ceramic coating, also known as nano-ceramic coating, is a protective layer that is applied to a vehicle's exterior surfaces..."
            />
        </section>
    )
}