"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {MapContainer} from "@/components/ui/map-container"

export default function UserDashboard() {
    const [activeAlert, setActiveAlert] = useState({
        type: "flood",
        level: "high",
        message: "Flood warning in your area. Please be prepared to evacuate.",
    })

    const disasters = {
        flood: { color: "bg-blue-500", probability: 85 },
        drought: { color: "bg-yellow-500", probability: 60 },
        landslide: { color: "bg-brown-500", probability: 40 },
    }

    return (
        <div className="w-full h-full">
            {activeAlert && (
                <Alert variant="destructive" className="mb-6 hidden">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Active Alert: {activeAlert.type.toUpperCase()}</AlertTitle>
                    <AlertDescription>{activeAlert.message}</AlertDescription>
                </Alert>
            )}

            <MapContainer />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Map Component */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Your Location & Nearby Risks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        
                    </CardContent>
                </Card>

                {/* Risk Assessment */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Risk Assessment</CardTitle>
                        <CardDescription>Based on your location</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {Object.entries(disasters).map(([type, data]) => (
                                <li key={type} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="capitalize">{type} Risk</span>
                                        <Badge variant={data.probability > 70 ? "destructive" : "default"}>
                                            {data.probability}%
                                        </Badge>
                                    </div>
                                    <Progress value={data.probability} className={data.color} />
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Emergency Contacts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Emergency Contacts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>Local Police: 911</li>
                            <li>Fire Department: 911</li>
                            <li>Medical Emergency: 911</li>
                            <li>Disaster Response Team: 555-0123</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Safety Tips */}

                <Card>
                    <CardHeader>
                        <CardTitle>Safety Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Create an emergency kit</li>
                            <li>Know your evacuation routes</li>
                            <li>Stay informed through official channels</li>
                            <li>Follow instructions from authorities</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Recent Updates */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>Weather alert issued for heavy rainfall</li>
                            <li>Evacuation drill scheduled for next week</li>
                            <li>New emergency shelter opened downtown</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            
        </div>
    )
}