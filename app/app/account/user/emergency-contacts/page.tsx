"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import EmergencyContactCard from "@/components/ui/emergency-contact-card";

export default function EmergencyContactsPage(){
    const contacts = [
        {
            id: "1",
            name: "Jane Smith",
            relationship: "Spouse",
            phone: "+1 (555) 123-4567",
            email: "jane.smith@example.com",
            address: "123 Emergency St, Safety City, SC 12345",
            notes: "Has spare house key. Knows medical history."
        }, 
        {
            id: "1",
            name: "Jane Smith",
            relationship: "Spouse",
            phone: "+1 (555) 123-4567",
            email: "jane.smith@example.com",
            address: "123 Emergency St, Safety City, SC 12345",
            notes: "Has spare house key. Knows medical history."
        }
    ]


    const handleEdit = (updatedContact) => {
    console.log("Updating contact:", updatedContact)
    // Here you would typically update the contact in your database
  }

  const handleSendAlert = (contactId) => {
    console.log("Sending alert to contact:", contactId)
    // Here you would typically trigger your alert system
  }


    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Emergency Contacts</CardTitle>
                    <CardDescription>Manage your emergency contact list</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="space-y-4">
                       {
                        contacts.map((contact) => (
                            <li key={contact.id}>
                                <EmergencyContactCard
                                    contact={contact}
                                    onEdit={handleEdit}
                                    onSendAlert={handleSendAlert}
                                />
                            </li>
                        ))
                       }
                    </ul>
                    
                </CardContent>
            </Card>
        </div>
    )
}