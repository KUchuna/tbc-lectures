import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { UserProvider } from '@auth0/nextjs-auth0/client'


export default function DashboardLayout({children}) {
    return (
        <>
            <UserProvider>
                <Header />
                    {children}
                <Footer />
            </UserProvider>
        </>
    )
}