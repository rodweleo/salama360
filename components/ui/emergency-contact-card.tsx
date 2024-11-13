"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Phone, Mail, MapPin, AlertCircle, Send, Edit, User } from "lucide-react"

interface EmergencyContact {
  id: string
  name: string
  relationship: string
  phone: string
  email: string
  address: string
  notes: string
}

interface UserInfo {
  name: string
  bloodType: string
  allergies: string[]
  medications: string[]
  medicalConditions: string[]
}

interface EmergencyContactCardProps {
  user?: UserInfo
  contact: EmergencyContact
  onEdit: (contact: EmergencyContact) => void
  onSendAlert: (contactId: string) => void
}

export default function EmergencyContactCard({ contact, onEdit, onSendAlert }: EmergencyContactCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEdit(editedContact)
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
  }

  return (
    <Card className="w-full">
      <CardContent>
        <div className="space-y-4 mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-9 w-9 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${contact.name}`} alt={contact.name} />
                <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{contact.name}</p>
                <p className="text-sm text-muted-foreground">{contact.relationship}</p>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={handleEdit}>
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-md font-semibold">Contact Information</h3>
            <div className="space-y-2.5">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <p>{contact.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <p>{contact.email}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <p>{contact.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
          <p className="text-sm text-muted-foreground">{contact.notes}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Send Emergency Alert
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Emergency Alert</DialogTitle>
              <DialogDescription>
                Are you sure you want to send an emergency alert to {contact.name}? This should only be used in genuine emergency situations.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => { }}>Cancel</Button>
              <Button variant="destructive" onClick={() => onSendAlert(contact.id)}>
                <AlertCircle className="mr-2 h-4 w-4" />
                Confirm Alert
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline" onClick={() => { }}>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </CardFooter>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Emergency Contact</DialogTitle>
            <DialogDescription>
              Update the information for your emergency contact.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={editedContact.name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="relationship" className="text-right">
                Relationship
              </Label>
              <Input
                id="relationship"
                name="relationship"
                value={editedContact.relationship}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={editedContact.phone}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={editedContact.email}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                value={editedContact.address}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={editedContact.notes}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <div className="w-full flex justify-between">
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </DialogFooter>
        </DialogContent>
        
      </Dialog>
    </Card>
  )
}