"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardTitle, CardDescription, CardHeader, CardFooter, CardContent } from "./card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Button } from "./button"
import { Input } from "./input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select"
import { Checkbox } from "./checkbox"
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

const counties = ["Kisii", "Nairobi", "Nakuru"];

const interests = [
    "Medical Emergencies",
    "Disaster Relief",
    "Search and Rescue",
    "Fire Response",
    "Community Support",
]

const skills = [
    "First Aid",
    "CPR",
    "Firefighting",
    "Search and Rescue",
    "Emergency Medical Technician",
    "Crisis Counseling",
    "Logistics Management",
]

export const VolunteerRegistrationSchema = z.object({
    email: z.string().email(),
    phone: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    firstName: z
        .string().min(2),
    gender: z.enum(["Male", "Female"], {
        required_error: "You need to select your gender type",
    }),
    lastName: z.string().min(2),
    interests: z.array(z.string()).min(1),
    experienceLevel: z.enum(["beginner", "intermediate", "advanced"]),
    county: z.enum(["Kisii", "Nairobi", "Nakuru"]),
    skills: z.array(z.string()).min(1),
    backgroundCheck: z.boolean().default(false),

})

export default function VolunteerRegistrationForm() {

    const form = useForm<z.infer<typeof VolunteerRegistrationSchema>>({
        resolver: zodResolver(VolunteerRegistrationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "Male",
            interests: [],
            skills: [],
            experienceLevel: "beginner",
        },
    })

    async function onSubmit(values: z.infer<typeof VolunteerRegistrationSchema>) {
        alert(JSON.stringify(values))
    }
    return (
        <Card className="w-fit">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle>Volunteer Registration</CardTitle>
                        <CardDescription>Join our community of volunteers and make a difference</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className="font-bold text-xl">Personal Information</h1>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 *:w-full">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder=""
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder=""
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Gender</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-wrap gap-4"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="Male" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Male
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="Female" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Female
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="county"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>County</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select your County" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {
                                                                counties.map((county) => (
                                                                    <SelectItem key={county} value={county}>{county}</SelectItem>
                                                                ))
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h1 className="font-bold text-xl">Contact Information</h1>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 *:w-full place-items-center">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder=""
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-left">Phone Number</FormLabel>
                                                <FormControl className="w-full">
                                                    <PhoneInput defaultCountry="KE" placeholder="Enter a phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="interests"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Areas of Interest</FormLabel>
                                        <FormControl>
                                            <div className="flex flex-wrap  items-center gap-5">
                                                {interests.map((interest) => (
                                                    <div key={interest} className="flex flex-wrap items-center space-x-2">
                                                        <Checkbox
                                                            checked={field.value?.includes(interest)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, interest])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== interest
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                        <span>{interest}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="experienceLevel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Experience Level</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your experience level" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="beginner">Beginner</SelectItem>
                                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                                    <SelectItem value="advanced">Advanced</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="skills"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Skills</FormLabel>
                                        <FormControl>
                                            <div className="flex flex-wrap items-center gap-4">
                                                {skills.map((skill) => (
                                                    <div key={skill} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            checked={field.value?.includes(skill)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, skill])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== skill
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                        <span>{skill}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name="backgroundCheck"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-top gap-2.5">
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                <div className="grid gap-1.5 leading-none">
                                                    <label
                                                        htmlFor="terms1"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        I agree to undergo a background check
                                                    </label>
                                                    <p className="text-sm text-muted-foreground">
                                                        You agree to our mandatory background check policy.
                                                    </p>
                                                </div>
                                                <p className=""></p>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </div>

                    </CardContent>
                    <CardFooter>
                        <div className="w-full flex flex-col gap-5">
                            <div className="flex items-center justify-between w-full">
                                <Button variant="secondary" type="reset">Cancel</Button>
                                <Button type="submit">Submit Application</Button>
                            </div>

                            <div className="flex items-center justify-center gap-2.5">
                                <p>Already have an account ? </p>
                                <Button type="button" variant="link">
                                    <Link href="/app/auth/login" className="text-blue-500 font-bold">Login</Link>
                                </Button>
                            </div>
                       </div>
                    </CardFooter>
                </form>
            </Form>
        </Card>

    )
}