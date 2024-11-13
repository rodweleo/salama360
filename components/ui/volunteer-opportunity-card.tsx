import { VolunteeringOpportunityProps } from "@/utils/types";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { MapPin } from "lucide-react";
import Link from "next/link"
export default function VolunteerOpportunityCard({opportunity}: {
    opportunity: VolunteeringOpportunityProps
}){

    const slug = opportunity.title.toLowerCase().replaceAll(" ", "-")
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>{opportunity.title}</CardTitle>
                <CardDescription>
                    <div className="flex items-center gap-1"><MapPin size={14}/> {opportunity.location}</div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil repellendus magni repudiandae quae, excepturi eius architecto dolores veritatis maxime natus voluptate, enim esse. Quis dolor quas perspiciatis obcaecati aspernatur.</p>
                    <Button><Link href={`/volunteer/${slug}`}>Apply</Link></Button>
                </div>
            </CardContent>
            <CardFooter className="flex gap-2.5 justify-between">
                <span className="bg-blue-200 px-8 py-2 rounded-md">{opportunity.date}</span>
                <span>Posted on: {opportunity.created_at}</span>
            </CardFooter>
        </Card>
    )

}