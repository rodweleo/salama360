import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"
import RootNav from "@/components/ui/root-nav"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <RootNav />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Salama360</h1>
                        <p className="text-xl mb-8">Empowering communities through AI-driven disaster preparedness</p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                <p className="text-lg mb-4">
                                    Founded in 2024, Salama360 emerged from a simple yet powerful idea: to harness the power of AI
                                    to protect communities from natural disasters. Our team of software engineers, data scientists, emergency response
                                    experts, and community leaders came together with a shared vision of creating a world where no one
                                    is caught off guard by a disaster.
                                </p>
                                <p className="text-lg">
                                    Since our inception, we&apos;ve been dedicated to developing cutting-edge technology that not only
                                    predicts disasters with unprecedented accuracy but also provides actionable insights to save lives
                                    and minimize damage.
                                </p>
                            </div>
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <Users className="mr-2" /> Our Team
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            DisasterGuard is powered by a diverse team of experts, including:
                                        </p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Data Scientists and AI Specialists</li>
                                            <li>Emergency Response Professionals</li>
                                            <li>Community Engagement Specialists</li>
                                            <li>Software Engineers and UX Designers</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Target className="mr-2" /> Precision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    We strive for the highest level of accuracy in our predictions and alerts, constantly refining our AI models.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Users className="mr-2" /> Community-Centric
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Every feature and decision is made with the well-being of communities in mind, prioritizing their safety and resilience.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Lightbulb className="mr-2" /> Innovation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    We&apos;re committed to pushing the boundaries of what&apos;s possible in disaster prediction and response through continuous innovation.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Join Us in Making a Difference</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Whether you&apos;re a community leader, emergency responder, or concerned citizen, DisasterGuard is here to
                            empower you with the tools and knowledge to face natural disasters head-on.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/signup">Get Started with DisasterGuard</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}