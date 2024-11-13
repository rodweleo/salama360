import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function RootNav(){
    return (
        <header className="h-20 sticky top-0 shadow-sm bg-white">
            <div className="flex justify-around items-center h-full">
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

                <ul className="flex items-center gap-5">
                    <li><Button variant="secondary"><Link href="/auth/register" target="_blank">Create Account</Link></Button></li>
                    <li><Button><Link href="/app/auth/login" target="_blank">Login</Link></Button></li>
                </ul>
            </div>
        </header>
    )
}