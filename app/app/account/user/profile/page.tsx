import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, User, Mail, Phone, MapPin, Bell, Shield } from "lucide-react"

export default function UserProfilePage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">User Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Your personal and contact details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Name:</span>
                                <span>Jane Smith</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Email:</span>
                                <span>jane.smith@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Phone:</span>
                                <span>+1 (555) 987-6543</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Location:</span>
                                <span>Resilient City, RC</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Alert Preferences</CardTitle>
                        <CardDescription>Your current alert settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Bell className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Alert Methods:</span>
                                <div className="space-x-2">
                                    <Badge variant="secondary">SMS</Badge>
                                    <Badge variant="secondary">Email</Badge>
                                    <Badge variant="secondary">Push</Badge>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <AlertTriangle className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Alert Types:</span>
                                <div className="space-x-2">
                                    <Badge>Flood</Badge>
                                    <Badge>Earthquake</Badge>
                                    <Badge>Wildfire</Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Safety Status</CardTitle>
                        <CardDescription>Your current safety information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Shield className="mr-2 h-4 w-4 text-green-500" />
                                <span className="font-semibold mr-2">Current Status:</span>
                                <Badge variant="outline" className="bg-green-50 text-green-700">Safe</Badge>
                            </div>
                            <p>No active alerts in your area. Stay prepared and keep your emergency kit updated.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 flex justify-end">
                <Button asChild>
                    <Link href="/user/settings">Edit Profile</Link>
                </Button>
            </div>
        </div>
    )
}