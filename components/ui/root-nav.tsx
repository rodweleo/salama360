"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import useLoginModal from "@/hooks/use-login-modal"
import { useSession } from "@/hooks/useSession"
import { usePathname, useRouter } from "next/navigation"

export default function RootNav() {

    const loginModal = useLoginModal()
    const router = useRouter()
    const { data } = useSession()

    const user = data?.user
    const pathName = usePathname();

    const isInAccountPage = pathName.startsWith("/app/account")

    return (
        <header className={`sticky top-0 z-50 bg-white shadow-md py-5 ${isInAccountPage ? "hidden" : "block"}`}>
            <div className="container flex items-center justify-between h-full">
                <Link href="/" className="text-2xl font-bold flex items-center">
                    Salama<span className="italic text-blue-500 font-bold text-4xl">360</span>
                </Link>
                <nav>
                    <ul className="flex gap-10">
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/features" className="hover:underline">Features</Link></li>
                        <li><Link href="/impact" className="hover:underline">Impact</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link href="/volunteer" className="hover:underline">Volunteer</Link></li>
                        <li><Link href="/faq" className="hover:underline">Frequent Asked Questions</Link></li>
                    </ul>
                </nav>

                <ul className="flex items-center gap-5 ">
                    <li><Button variant="secondary"><Link href="/app/auth/register" target="_blank">Create Account</Link></Button></li>
                    {
                        user ? <li><Button onClick={() => router.push("/app/account/user")}>Go to Dashboard</Button></li>
                            : <li><Button onClick={() => loginModal.setOpen(true)}>Login</Button></li>
                    }
                </ul>
            </div>
        </header>
    )
}