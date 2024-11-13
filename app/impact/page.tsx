import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Heart, TrendingUp, Globe } from "lucide-react"

export default function ImpactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Impact</h1>
                        <p className="text-xl mb-8">Making a difference in communities worldwide</p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">
                                        <Heart className="mr-2" /> Lives Protected
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-primary">1M+</p>
                                    <p className="text-lg mt-2">Individuals safeguarded from disasters</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">
                                        <Globe className="mr-2" /> Communities Served
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-primary">500+</p>
                                    <p className="text-lg mt-2">Cities and towns using DisasterGuard</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">
                                        <TrendingUp className="mr-2" /> Prediction Accuracy
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-primary">95%</p>
                                    <p className="text-lg mt-2">Average accuracy of our AI predictions</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">
                                        <AlertTriangle className="mr-2" /> Disasters Mitigated
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-primary">100+</p>
                                    <p className="text-lg mt-2">Major disasters effectively managed</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Coastal City Flood Prevention</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">
                                        In 2023, our early warning system predicted a severe storm surge in a coastal city 48 hours in advance.
                                        This allowed local authorities to implement flood prevention measures and evacuate vulnerable areas,
                                        resulting in zero casualties and minimal property damage.
                                    </p>
                                    <p className="font-semibold">Impact: 50,000 lives protected, $100M in damages prevented</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Mountain Community Landslide Response</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">
                                        Our AI detected early signs of an impending landslide in a remote mountain community. The advance warning
                                        allowed for swift evacuation and resource deployment, preventing a potential tragedy.
                                    </p>
                                    <p className="font-semibold">Impact: 5,000 residents safely evacuated, critical infrastructure protected</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Global Reach</h2>
                        <div className="text-center">
                            <p className="text-xl mb-8">
                                DisasterGuard is making a difference across the globe, from densely populated urban centers to remote rural communities.
                            </p>
                            <div className="bg-muted p-8 rounded-lg">
                                <p className="text-4xl font-bold text-primary mb-4">30+</p>
                                <p className="text-xl">Countries using DisasterGuard technology</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Join Us in Making a Global Impact</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            By choosing DisasterGuard, you&apos;re not just protecting your community – you&apos;re joining a global movement
                            to create a safer, more resilient world in the face of natural disasters.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/signup">Become Part of Our Success Story</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}