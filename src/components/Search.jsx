import "../styles/Search.css"

export default function Search() {
    return (
        <div className="search-input-container">
            <input type="text" className="search-input" placeholder="Search for service"/>
            <button className="search-button">Search</button>
        </div>
    )
}