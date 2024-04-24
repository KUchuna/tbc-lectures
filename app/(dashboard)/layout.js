import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function DashboardLayout({children}) {

    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}