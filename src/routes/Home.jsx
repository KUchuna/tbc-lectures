import BlogSection from '../components/BlogSection.jsx'
import Main from '../components/Main.jsx'
import ServiceSection from '../components/ServiceSection.jsx'

export default function Home() {
    return (
        <div className='home-page-container'>
            <Main />
            <ServiceSection 
                homePage
            />
            <BlogSection />
        </div>
    )
}