"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const volunteerOpportunities = [
    { id: 1, title: "Emergency Response Team", skills: ["First Aid", "Search and Rescue"], location: "City Center", date: "Ongoing" },
    { id: 2, title: "Disaster Preparedness Workshop Facilitator", skills: ["Public Speaking", "Training"], location: "Community Hall", date: "Every Saturday" },
    { id: 3, title: "Supply Distribution Coordinator", skills: ["Logistics", "Organization"], location: "Various", date: "As Needed" },
    { id: 4, title: "Mental Health Support Volunteer", skills: ["Counseling", "Active Listening"], location: "Remote", date: "Flexible" },
]

export default function Page() {
    const [skills, setSkills] = useState([])
    const [availability, setAvailability] = useState('')
    const [location, setLocation] = useState('')
    const [matchedOpportunities, setMatchedOpportunities] = useState([])

    const handleMatch = () => {
        const matched = volunteerOpportunities.filter(opp =>
            opp.skills.some(skill => skills.includes(skill)) &&
            (location === '' || opp.location.toLowerCase().includes(location.toLowerCase()))
        )
        setMatchedOpportunities(matched)
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Find Volunteer Opportunities</CardTitle>
                    <CardDescription>Match your skills and availability with local needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="skills">Skills</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["First Aid", "Search and Rescue", "Public Speaking", "Training", "Logistics", "Counseling"].map((skill) => (
                                <label key={skill} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={skill}
                                        checked={skills.includes(skill)}
                                        onCheckedChange={(checked) => {
                                            setSkills(
                                                checked
                                                    ? [...skills, skill]
                                                    : skills.filter((s) => s !== skill)
                                            )
                                        }}
                                    />
                                    <span>{skill}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="availability">Availability</Label>
                        <Select onValueChange={setAvailability}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your availability" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="weekdays">Weekdays</SelectItem>
                                <SelectItem value="weekends">Weekends</SelectItem>
                                <SelectItem value="evenings">Evenings</SelectItem>
                                <SelectItem value="anytime">Anytime</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="location">Preferred Location</Label>
                        <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter city or 'Remote'" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleMatch}>Find Matches</Button>
                </CardFooter>
            </Card>
            {matchedOpportunities.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Matched Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {matchedOpportunities.map((opp) => (
                            <div key={opp.id} className="mb-4 p-4 border rounded">
                                <h3 className="font-bold">{opp.title}</h3>
                                <p>Skills: {opp.skills.join(", ")}</p>
                                <p>Location: {opp.location}</p>
                                <p>Date: {opp.date}</p>
                                <Button className="mt-2">Apply</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}
        </div>
    )
}