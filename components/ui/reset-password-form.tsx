"use client"

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./form";
import { Input } from "@/components/ui/input";
import z from "zod"
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const PasswordResetSchema = z.object({
    password: z.string({
        required_error: 'Please select the type of emergency.',
    }),
    confirm_password: z.string().min(10, {
        message: 'Description must be at least 10 characters.',
    }),

})
export default function ResetPasswordForm() {

    const form = useForm<z.infer<typeof PasswordResetSchema>>({
        resolver: zodResolver(PasswordResetSchema),
        defaultValues: {
            password: '',
            confirm_password: '',
        },
    })

    async function onSubmit(values: z.infer<typeof PasswordResetSchema>) {
        alert(JSON.stringify(values))
    }

    return (
        <Card className="w-fit">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <CardHeader>
                        <CardTitle>Reset password</CardTitle>
                        <CardDescription>Enter your desired password below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2.5">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="********"
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
                                name="confirm_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="********"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Reset Password</Button>
                    </CardFooter>
                </form>
            </Form >
        </Card>


    )
}