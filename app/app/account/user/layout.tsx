import { UserSidebar } from "@/components/ui/user-sidebar";
import { ReactNode } from "react"
export default function UserLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div className="flex w-full">
            <aside>
                <UserSidebar />
            </aside>
            <main className="p-4 flex-1 overflow-y-auto bg-gray-100 w-full">
                {children}
            </main>
        </div>
    )
}