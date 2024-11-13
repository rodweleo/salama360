"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Bell,
    Database,
    Users,
    Truck,
    Map,
    Settings,
    ChevronDown,
    BarChart,
    AlertTriangle,
    MessageSquare,
    HelpCircle,
    User,
    ChevronUp,
    User2
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarFooter
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu"
import { Button } from "./button"
import { signOutAction } from "@/app/actions/auth"
import toast from "react-hot-toast"

const navItems = [
    {
        name: "Dashboard",
        href: "/app/account/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Alerts",
        icon: Bell,
        subItems: [
            { name: "Manage Alerts", href: "/app/account/admin/alerts" },
            { name: "Alert History", href: "/admin/alerts/history" },
            { name: "Create Alert", href: "/admin/alerts/create" },
        ],
    },
    {
        name: "Data Management",
        icon: Database,
        subItems: [
            { name: "Data Entry", href: "/admin/data-entry" },
            { name: "Data Analysis", href: "/admin/data-analysis" },
            { name: "Prediction Models", href: "/admin/prediction-models" },
        ],
    },
    {
        name: "User Management",
        href: "/app/dashboard/admin/users",
        icon: Users,
    },
    {
        name: "Resource Management",
        icon: Truck,
        subItems: [
            { name: "Inventory", href: "/admin/resources/inventory" },
            { name: "Allocation", href: "/admin/resources/allocation" },
            { name: "Requests", href: "/admin/resources/requests" },
        ],
    },
    {
        name: "Evacuation Planning",
        icon: Map,
        subItems: [
            { name: "Route Planning", href: "/admin/evacuation/routes" },
            { name: "Safe Zones", href: "/admin/evacuation/safe-zones" },
            { name: "Evacuation Drills", href: "/admin/evacuation/drills" },
        ],
    },
    {
        name: "Reports",
        icon: BarChart,
        subItems: [
            { name: "Incident Reports", href: "/admin/reports/incidents" },
            { name: "Performance Metrics", href: "/admin/reports/performance" },
            { name: "System Logs", href: "/admin/reports/logs" },
        ],
    },
    {
        name: "Communication",
        icon: MessageSquare,
        subItems: [
            { name: "Broadcast Messages", href: "/admin/communication/broadcast" },
            { name: "Emergency Contacts", href: "/admin/communication/contacts" },
        ],
    },
    {
        name: "Settings",
        href: "/app/account/admin/settings",
        icon: Settings,
    },
    {
        name: "Help & Support",
        href: "/app/account/admin/help",
        icon: HelpCircle,
    },
    {
        name: "Profile",
        href: "/app/account/admin/profile",
        icon: User,
    },
]

export function AdminSidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const signOut = async () => {
        const { success, message } = await signOutAction()

        if(!success){
            toast.error(message)
            return
        }

        router.replace("/")

    }

    return (
        <SidebarProvider>
            <Sidebar className="border-r">
                <SidebarHeader>
                    <Link href="/admin" className="flex items-center space-x-2 px-4 py-2">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold">Salama360</span>
                    </Link>
                </SidebarHeader>
                <SidebarContent>
                    {navItems.map((item, index) => (
                        <SidebarGroup key={index}>
                            {item.subItems ? (
                                <SidebarMenu className="list-none">
                                    <SidebarMenuButton>
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.name}
                                        <ChevronDown className="ml-auto h-4 w-4" />
                                    </SidebarMenuButton>
                                    <SidebarGroupContent>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <SidebarMenuItem key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className={cn(
                                                        "flex items-center w-full px-2 py-1 text-sm",
                                                        pathname === subItem.href
                                                            ? "bg-primary/10 text-primary"
                                                            : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                                    )}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarGroupContent>
                                </SidebarMenu>
                            ) : (
                                <SidebarMenuItem className="list-none">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center w-full px-2 py-3 rounded-md text-sm",
                                            pathname === item.href
                                                ? "bg-primary/10 text-primary font-semibold "
                                                : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                        )}
                                    >
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.name}
                                    </Link>
                                </SidebarMenuItem>
                            )}
                        </SidebarGroup>
                    ))}
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton>
                                        <User2 /> Username
                                        <ChevronUp className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="top"
                                    className="w-[--radix-popper-anchor-width]"
                                >
                                    <DropdownMenuItem>
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button className="w-full" onClick={signOut}>Sign Out</Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}