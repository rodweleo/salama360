"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
    FileText,
    AlertTriangle,
    MessageSquare
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const navItems = [
    {
        name: "Dashboard",
        href: "/app/dashboard/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Alerts",
        icon: Bell,
        subItems: [
            { name: "Manage Alerts", href: "/app/dashboard/admin/alerts" },
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
        href: "/admin/settings",
        icon: Settings,
    },
]

export function AdminSidebar() {
    const pathname = usePathname()

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
            </Sidebar>
        </SidebarProvider>
    )
}