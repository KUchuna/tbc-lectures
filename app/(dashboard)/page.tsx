import BlogSection from '../../components/BlogSection.tsx'
import Main from '../../components/Main.tsx'
import ServiceSection from '../../components/ServiceSection.tsx'
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