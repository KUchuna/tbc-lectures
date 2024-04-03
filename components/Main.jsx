import '../styles/Main.css'
import Filter from './Filter'

export default function Main() {
    return (
        <section className='main-container parent-flex-row-center'>
            <div className='parent-max-width'>
                <div className='main-image'>
                    <h1>Elevating Excellence in Detailing Services</h1>
                    <p>
                        Experience perfection in every detail. From automotive finesse to 
                        architectural sophistication, 
                        we bring precision to life. Elevate your vision with us.
                    </p>
                <Filter />
                </div>
            </div>
        </section>
    )
} 