import BlogSection from '../../components/BlogSection.jsx'
import Main from '../../components/Main.jsx'
import ServiceSection from '../../components/ServiceSection.jsx'
import '@/styles/App.css'
import "@/styles/Header.css"
import "@/styles/Footer.css"


export default function Home() {
    return (
        <div className='home-page-container dark:bg-slate-500'>
            <Main />
            <ServiceSection 
                homePage
            />
            <BlogSection />
        </div>
    )
}