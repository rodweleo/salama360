"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowLeftIcon, BriefcaseBusiness, Calendar, MapPin, Medal } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Page() {
    const { job } = useParams()


    const shareJobPosting = () => {
        console.log("Job posting to be referred to a friend")
    }

    return (
        <div>
            <main className="container mx-auto py-10 flex gap-10 justify-between">
                <Button variant="outline" className="sticky top-28"><Link href="/volunteer" className="flex items-center gap-2.5"> <ArrowLeftIcon /> <span>Back to Jobs</span></Link></Button>
                <Card>
                    <CardHeader>
                        <CardTitle>{job}</CardTitle>
                        <CardDescription>
                            <div className="flex items-center gap-1"><MapPin size={14} /> <span>Homepage</span></div>
                        </CardDescription>
                        <div>
                            <Button variant="outline" onClick={shareJobPosting}>Refer a Friend</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-5">
                            <section className="space-y-2">
                                <h2 className="font-bold text-2xl">Job Summary: </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo ea voluptates! Cumque aliquid non officia ratione laboriosam vitae repellendus ex consectetur, voluptatibus, dolores eius quis facilis quia obcaecati. Voluptatibus?</p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-bold text-2xl">Responsibilities: </h2>
                                <ul className="list-decimal ml-5 space-y-2">
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo ea voluptates! Cumque aliquid non officia ratione laboriosam vitae repellendus ex consectetur, voluptatibus, dolores eius quis facilis quia obcaecati. Voluptatibus?</p></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo ea voluptates! Cumque aliquid non officia ratione laboriosam vitae repellendus ex consectetur, voluptatibus, dolores eius quis facilis quia obcaecati. Voluptatibus?</p></li>
                                </ul>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-bold text-2xl">Qualifications: </h2>
                                <ul className="list-decimal ml-5 space-y-2">
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo ea voluptates! Cumque aliquid non officia ratione laboriosam vitae repellendus ex consectetur, voluptatibus, dolores eius quis facilis quia obcaecati. Voluptatibus?</p></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo ea voluptates! Cumque aliquid non officia ratione laboriosam vitae repellendus ex consectetur, voluptatibus, dolores eius quis facilis quia obcaecati. Voluptatibus?</p></li>
                                </ul>
                            </section>
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-fit sticky top-28">
                    <CardContent className="space-y-5">
                        <div className="flex flex-col w-full gap-2.5 mt-5">
                            <Button>Apply</Button>
                            <Button variant="outline">Generate Specialized CV</Button>
                        </div>

                        <ul className="space-y-5">
                            <li>
                                <div className="flex items-center gap-2">
                                    <BriefcaseBusiness size={40} className="bg-orange-200 p-2.5 rounded-full" />
                                    <div>
                                        <h3 className="font-medium">Job Type</h3>
                                        <span className="font-bold">Contract</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-2">
                                    <MapPin size={40} className="bg-orange-200 p-2.5 rounded-full" />
                                    <div>
                                        <h3 className="font-medium">Location</h3>
                                        <span className="font-bold">N/A</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-2">
                                    <Medal size={40} className="bg-orange-200 p-2.5 rounded-full" />
                                    <div>
                                        <h3 className="font-medium">Job Experience</h3>
                                        <span className="font-bold">N/A</span>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-2">
                                    <Calendar size={40} className="bg-orange-200 p-2.5 rounded-full" />
                                    <div>
                                        <h3 className="font-medium">Date Posted:</h3>
                                        <span className="font-bold">N/A</span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </CardContent>
                </Card>
            </main>
        </div>
    )
}