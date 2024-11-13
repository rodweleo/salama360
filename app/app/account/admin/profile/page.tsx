import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Shield, Award } from "lucide-react"
import { createClient } from "@/utils/supabase/server"

//get admin details


export default async function AdminProfilePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()

    if(error){
        return;
    }
    
    //get metadata about the signed in user
    async function getUserById(userId: string){
        const { data, error } = await supabase.from("slm_usr_members").select("*").eq("slm_usr_id", userId).limit(1).single()

        if(error){
            return null
        }

        return data;
    }

    const {user} = data;

    const userDetails = await getUserById(user?.id);

    const {first_name, last_name, access_level, roles} = userDetails

    const fullName = first_name + " " + last_name;

    const main_role: string = roles.includes("admin") ? "System Administrator" : "Member"

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Admin Profile</h1>
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
                                <span>{fullName}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Email:</span>
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Phone:</span>
                                <span>{user.phone}</span>
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
                        <CardTitle>Admin Details</CardTitle>
                        <CardDescription>Your role and responsibilities</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Shield className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Role:</span>
                                <span>{main_role}</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold mr-2">Access Level:</span>
                                <span>{access_level}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your latest actions in the system</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>Updated emergency response protocol for flood scenarios</li>
                            <li>Added new AI model for wildfire prediction</li>
                            <li>Reviewed and approved 5 new user accounts</li>
                            <li>Generated monthly system performance report</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 flex justify-end">
                <Button asChild>
                    <Link href="/admin/settings">Edit Profile</Link>
                </Button>
            </div>
        </div>
    )
}