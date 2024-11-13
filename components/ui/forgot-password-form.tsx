"use client"

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./form";
import { Input } from "./input";
import z from "zod"
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const ForgotPasswordSchema = z.object({
    email: z.string().email({
        message: "Kindly enter a valid email address"
    })

})
export default function ForgotPasswordForm() {
    const router = useRouter()

    const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: ""
        },
    })

    async function onSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
        const {email} = values;

        const token = 12345;

        //create a new link
        const url = `/app/auth/verify-otp?${email}&token=${token}`;

        router.push(url)
        
    }

    

    return (
        <Card className="w-fit">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <CardHeader>
                        <CardTitle>Forgot Password</CardTitle>
                        <CardDescription>It&apos;s sad to  hear you have lost your password, kindly provide your email below to guide us in retrieving your password.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="abc@example.com"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Provide the email registered to your account.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Send Link</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}