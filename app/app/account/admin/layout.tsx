import { AdminSidebar } from "@/components/ui/admin-sidebar";
import { ReactNode } from "react"
export default function AdminLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div className="flex w-full">
            <aside>
                <AdminSidebar />
            </aside>
            <main className="p-4 flex-1 overflow-y-auto bg-gray-100 w-full">
                {children}
            </main>
        </div>
    )
}