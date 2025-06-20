"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log({ name, email, subject, message })

        // Reset form fields
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow">
                <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl mb-8">We&apos;re here to help. Reach out to us for any inquiries or support.</p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="mb-8">
                                    Whether you have a question about our features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail className="mr-4 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p>info@salama360.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="mr-4 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="mr-4 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Address</h3>
                                            <p>Nairobi, Kenya</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                                    <div className="flex space-x-4">
                                        <Button variant="outline" size="icon">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                            <span className="sr-only">Facebook page</span>
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                            <span className="sr-only">Twitter page</span>
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            <span className="sr-only">GitHub account</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Send us a Message</CardTitle>
                                        <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Subject</Label>
                                                <Select onValueChange={setSubject} required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a subject" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="general">General Inquiry</SelectItem>
                                                        <SelectItem value="support">Technical Support</SelectItem>
                                                        <SelectItem value="sales">Sales</SelectItem>
                                                        <SelectItem value="partnership">Partnership</SelectItem>
                                                        <SelectItem value="press">Press</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Your message here..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full">
                                                <Send className="mr-2 h-4 w-4" /> Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Can&apos;t find the answer you&apos;re looking for? Check out our FAQ section for more information.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/faq">View FAQ</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}