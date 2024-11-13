"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

export default function UserSettingsPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">User Settings</h1>
            <Tabs defaultValue="account">
                <TabsList className="mb-4">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>Update your account details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Jane Smith" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="jane.smith@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" defaultValue="123 Safety St, Resilient City, RC 12345" />
                            </div>
                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Manage your alert settings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <Label>Alert Methods</Label>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="sms" />
                                    <Label htmlFor="sms">SMS</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="email" defaultChecked />
                                    <Label htmlFor="email">Email</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="push" defaultChecked />
                                    <Label htmlFor="push">Push Notifications</Label>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <Label>Alert Types</Label>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="flood" defaultChecked />
                                    <Label htmlFor="flood">Flood</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="earthquake" defaultChecked />
                                    <Label htmlFor="earthquake">Earthquake</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="wildfire" defaultChecked />
                                    <Label htmlFor="wildfire">Wildfire</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="hurricane" />
                                    <Label htmlFor="hurricane">Hurricane</Label>
                                </div>
                            </div>
                            <Button>Save Preferences</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>Manage your account security</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <div className="relative">
                                    <Input
                                        id="current-password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter current password"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" placeholder="Enter new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                            </div>
                            <Button>Change Password</Button>
                            <div className="pt-4">
                                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Switch id="two-factor" />
                                    <Label htmlFor="two-factor">Enable</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                
            </Tabs>
        </div>
    )
}