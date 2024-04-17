import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cookies } from "next/headers"
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";


export default function DashboardLayout({children}) {
    const cookieStore = cookies()
    const cookie = cookieStore.get(AUTH_COOKIE_KEY)

    if (!cookie?.value) {
        redirect("/login")
    }


    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}