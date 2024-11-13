'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { submitEmergencyRequestAction } from '@/app/actions/submit-emergency-request-action'

export const EmergencyRequestFormSchema = z.object({
    emergencyType: z.string({
        required_error: 'Please select the type of emergency.',
    }),
    description: z.string().min(10, {
        message: 'Description must be at least 10 characters.',
    }),
    location: z.string().min(5, {
        message: 'Please provide a valid location.',
    }),
})

export default function EmergencyRequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const form = useForm<z.infer<typeof EmergencyRequestFormSchema>>({
        resolver: zodResolver(EmergencyRequestFormSchema),
        defaultValues: {
            emergencyType: '',
            description: '',
            location: '',
        },
    })

    async function onSubmit(values: z.infer<typeof EmergencyRequestFormSchema>) {
        setIsSubmitting(true)
        setSubmitError(null)
        const result = await submitEmergencyRequestAction(values)

        if (!result.success) {
            setSubmitError(result.message)
            setIsSubmitting(false)
        } else {
            alert('Emergency request submitted successfully!')
            form.reset()
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="emergencyType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type of Emergency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the type of emergency" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="medical">Medical Emergency</SelectItem>
                                    <SelectItem value="flood">Flood Rescue</SelectItem>
                                    <SelectItem value="fire">Fire</SelectItem>
                                    <SelectItem value="accident">Accident</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Please describe your emergency situation"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Provide as much detail as possible to help volunteers understand your situation.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="Your current location" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your address or describe your location if you&apos;re unsure of the exact address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-col items-stretch">
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Submit Emergency Request'
                        )}
                    </Button>
                    {submitError && (
                        <Alert variant="destructive" className="mt-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{submitError}</AlertDescription>
                        </Alert>
                    )}
                </div>
            </form>
        </Form>
    )
}