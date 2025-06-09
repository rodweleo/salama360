"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Bell,
    Map,
    AlertTriangle,
    MessageSquare,
    ChevronDown,
    BookOpen,
    FileText,
    HelpCircle,
    Phone,
    User,
    Settings
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarMenuSubItem,
    SidebarMenuSub
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { signOutAction } from "@/app/actions/auth"

const navItems = [
    {
        name: "Home",
        href: "/app/account/user",
        icon: LayoutDashboard,
    },
    {
        name: "Alerts",
        icon: Bell,
        subItems: [
            { name: "Current Alerts", href: "/app/account/user/alerts/current" },
            { name: "Alert History", href: "/app/account/user/alerts/history" },
            { name: "Notification Settings", href: "/app/account/user/alerts/settings" },
        ],
    },
    {
        name: "Evacuation",
        icon: Map,
        subItems: [
            { name: "Evacuation Routes", href: "/app/account/user/evacuation/routes" },
            { name: "Safe Zones", href: "/app/account/user/evacuation/safe-zones" },
            { name: "Family Reunification", href: "/app/account/user/evacuation/reunification" },
        ],
    },
    {
        name: "Resources",
        icon: FileText,
        subItems: [
            { name: "Emergency Supplies", href: "/app/account/user/resources/supplies" },
            { name: "Shelter Information", href: "/app/account/user/resources/shelters" },
            { name: "Medical Facilities", href: "/app/account/user/resources/medical" },
        ],
    },
    {
        name: "Education",
        icon: BookOpen,
        subItems: [
            { name: "Disaster Preparedness", href: "/app/account/user/education/preparedness" },
            { name: "Safety Guidelines", href: "/app/account/user/education/safety" },
            { name: "Training Modules", href: "/app/account/user/education/training" },
        ],
    },
    {
        name: "Community",
        icon: MessageSquare,
        subItems: [
            { name: "Local Updates", href: "/app/account/user/community/updates" },
            { name: "Volunteer Opportunities", href: "/app/account/user/community/volunteer" },
            { name: "Community Forum", href: "/app/account/user/community/forum" },
        ],
    },
    {
        name: "Emergency Contacts",
        href: "/app/account/user/emergency-contacts",
        icon: Phone,
    },
    {
        name: "Notifications",
        href: "/app/account/user/notifications",
        icon: Bell,
    },
    {
        name: "Settings",
        href: "/app/account/user/settings",
        icon: Settings,
    },
    {
        name: "Help & Support",
        href: "/app/account/user/help",
        icon: HelpCircle,
    },
    {
        name: "Profile",
        href: "/app/account/user/profile",
        icon: User,
    },
]

export function UserSidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const [activeTab, setActiveTab] = React.useState(0)

    const handleMenuToggle = (index: number) => {
        setActiveTab(index)
        setIsOpen(true)
    }

    const signOut = async () => {
        const { success, message } = await signOutAction()

        if (!success) {
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
                <SidebarContent className="px-4 flex flex-col justify-between">
                    <div className="space-y-2">
                        {navItems.map((item, index) => (
                            <>
                                {item.subItems ? (
                                    <SidebarMenu key={item.name}>
                                        <Collapsible
                                            open={isOpen && activeTab === index}
                                            onOpenChange={() => handleMenuToggle(index)}
                                            className="group/collapsible"
                                        >
                                            <SidebarMenuItem>
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton tooltip={item.name} isActive={isOpen && activeTab === index} className="flex items-center justify-between data-active:py-4">
                                                        <div className="flex items-center">
                                                            <item.icon className="mr-2 h-4 w-4" />
                                                            {item.name}
                                                        </div>
                                                        <ChevronDown />
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>

                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <SidebarMenuSubItem key={subIndex}>
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
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            </SidebarMenuItem>
                                        </Collapsible>
                                    </SidebarMenu>
                                ) : (
                                    <SidebarMenuItem className="list-none" key={item.name}>
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
                            </>
                        ))}
                    </div>

                    <SidebarMenuItem className="list-none w-full">
                        <Button variant="destructive" className="w-full" onClick={signOut}>
                            Log Out
                        </Button>
                    </SidebarMenuItem>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )
}