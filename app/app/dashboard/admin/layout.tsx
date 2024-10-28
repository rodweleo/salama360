import { AdminSidebar } from "@/components/ui/admin-sidebar";
import {ReactNode} from "react"
export default function AdminLayout({children}:{
    children: ReactNode
}){
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                <div className="flex w-full">
                    <aside>
                        <AdminSidebar />
                    </aside>
                    <main className="container mx-auto p-4 bg-gray-100 w-full">
                        {children}
                    </main>
                </div>
            </body>
            </html>
        
    )
}