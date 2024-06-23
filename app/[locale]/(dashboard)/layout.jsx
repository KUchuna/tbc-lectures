import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { UserProvider } from '@auth0/nextjs-auth0/client'

export const dynamic = 'force-dynamic'

export default function DashboardLayout({children}) {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <UserProvider>
                <Header />
                <main className="flex-1 dark:bg-slate-800">
                    {children}
                </main>
                <Footer />
            </UserProvider>
        </div>
    )
}