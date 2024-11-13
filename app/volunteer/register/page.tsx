import VolunteerRegistrationForm from "@/components/ui/volunteer-registration-form";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Volunteer Registration | Salama360"
}
export default function VolunteerRegistrationPage(){
    return (
        <div className="h-screen w-full grid place-items-center p-4">
            <VolunteerRegistrationForm/>
        </div>
    )
}