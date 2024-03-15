import "../styles/ServiceCard.css"
import upleftarrow from "../assets/upleftarrow.svg"

export default function ServiceCard(props) {
    return (
        <div className="service-card-container">
            <img src={props.img} alt="service img" className="service-card-img"/>
            <h4 className="service-card-title">{props.title}</h4>
            <p className="service-card-desc">{props.description}</p>
            <button className="service-card-button">Add to cart<img src={upleftarrow} alt="" /></button>
        </div>
    )
}