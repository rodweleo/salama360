
"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import VolunteerOpportunityCard from '@/components/ui/volunteer-opportunity-card'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const volunteerOpportunities = [
    { id: 1, title: "Emergency Response Team", skills: ["First Aid", "Search and Rescue"], location: "City Center", date: "Ongoing", created_at: "08/08/2024" },
    { id: 2, title: "Disaster Preparedness Workshop Facilitator", skills: ["Public Speaking", "Training"], location: "Community Hall", date: "Every Saturday", created_at: "08/08/2024" },
    { id: 3, title: "Supply Distribution Coordinator", skills: ["Logistics", "Organization"], location: "Various", date: "As Needed", created_at: "08/08/2024" },
    { id: 4, title: "Mental Health Support Volunteer", skills: ["Counseling", "Active Listening"], location: "Remote", date: "Flexible", created_at: "08/08/2024" },
]

export default function Page() {

    return (
        <div className="py-10 space-y-10">

            <section className="text-center">
                <h1 className="font-bold text-4xl">Find Volunteer Opportunities</h1>
                <p>Match your skills and availability with local needs</p>
            </section>
            <main className="container mx-auto flex gap-10">
                <Card className="w-full h-fit max-w-md sticky top-44">
                    <CardHeader>
                        <CardTitle className='flex items-center w-full justify-between'>
                            Filter
                            <button type="button" title="Clear Filters" className="text-sm text-red-500">Clear Filter</button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="skills" className="font-semibold text-lg">Volunteer Type</Label>
                            <div className="space-y-2">
                                {["First Aid", "Search and Rescue", "Public Speaking", "Training", "Logistics", "Counseling"].map((skill) => (
                                    <label key={skill} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={skill}
                                            className=' checked:bg-blue-500'
                                            onCheckedChange={(checked) => {
                                                console.log(checked)
                                            }}
                                        />
                                        <span>{skill}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="availability" className="font-semibold text-lg">Availability</Label>
                            <div className="space-y-2">
                                {["Weekdays", "Weekends", "Evenings", "Anytime"].map((timeline) => (
                                    <label key={timeline} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={timeline}
                                            onCheckedChange={(checked) => {
                                                console.log(checked)
                                            }}
                                        />
                                        <span>{timeline}</span>
                                    </label>
                                ))}
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>

                <ul className="space-y-5">
                    {volunteerOpportunities.map((opportunity) => (
                        <li key={opportunity.title}>
                            <VolunteerOpportunityCard opportunity={opportunity} />
                        </li>
                    ))}
                </ul>
            </main>

            <section className="py-20 bg-slate-800 flex items-center">
                <div className="flex flex-wrap items-center justify-around p-4 w-full h-full">
                    <div className="space-y-1">
                        <span className="text-slate-300">Ready to Serve and Protect ?</span>
                        <h1 className="text-4xl text-white font-bold">Sign up to be a Volunteer Today!</h1>
                    </div>

                    <Button className="px-8 py-2" variant="outline">
                        <Link href="/volunteer/register">Sign Up</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}