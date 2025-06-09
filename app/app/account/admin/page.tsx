"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Truck, Users, Activity } from "lucide-react"
import { MapContainer } from "@/components/ui/map-container"

export default function AdminDashboard() {
    const disasters = {
        flood: { color: "bg-blue-500", probability: 85 },
        drought: { color: "bg-yellow-500", probability: 60 },
        landslide: { color: "bg-brown-500", probability: 40 },
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-6">
                {/* Map Component */}
                <div className="bg-gray-200 h-[800px] w-full rounded-lg flex items-center justify-center">
                    <MapContainer />
                </div>
                <Card className="md:col-span-2 hidden">
                    <CardHeader>
                        <CardTitle>Disaster-Prone Areas & Evacuation Routes</CardTitle>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Early Warning Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {Object.entries(disasters).map(([type, data]) => (
                                <li key={type} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <AlertTriangle className={`w-6 h-6 mr-2 ${data.color} text-white rounded-full p-1`} />
                                        <span className="capitalize">{type}</span>
                                    </div>
                                    <Badge variant={data.probability > 70 ? "destructive" : "default"}>
                                        {data.probability}% Probability
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Current Weather Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>


                {/* Alerts Section */}


                {/* Resources Tracker */}
                <Card>
                    <CardHeader>
                        <CardTitle>Emergency Response Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Truck className="w-6 h-6 mr-2" />
                                    <span>Vehicles</span>
                                </div>
                                <Badge>15 Available</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Users className="w-6 h-6 mr-2" />
                                    <span>Volunteers</span>
                                </div>
                                <Badge>50 Ready</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Activity className="w-6 h-6 mr-2" />
                                    <span>Medical Teams</span>
                                </div>
                                <Badge>8 On Standby</Badge>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Prediction Overview */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Disaster Prediction Overview</CardTitle>
                        <CardDescription>AI-generated forecast for the next 7 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Object.entries(disasters).map(([type, data]) => (
                                <div key={type} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="capitalize">{type} Risk</span>
                                        <span className="font-semibold">{data.probability}%</span>
                                    </div>
                                    <Progress value={data.probability} className={data.color} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full">Send Alert to Community</Button>
                        <Button className="w-full" variant="outline">Update Evacuation Routes</Button>
                        <Button className="w-full" variant="secondary">Request Additional Resources</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}