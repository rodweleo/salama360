"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { PhoneInput } from "@/components/ui/phone-input";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import toast from "react-hot-toast";

const VerifyOtpSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export default function VerifyOtpForm(){

    const params = useSearchParams()
    const router = useRouter()

    const token = params.get("token");
    const email = params.get("email");

    if(!token && !email){
        const options: NavigateOptions = {
            scroll: true,
        }
        router.replace("/app/auth/forgot-password", options)
    }

    const form = useForm<z.infer<typeof VerifyOtpSchema>>({
        resolver: zodResolver(VerifyOtpSchema),
        defaultValues: {
            pin: "",
        },
    })

    function onSubmit(data: z.infer<typeof VerifyOtpSchema>) {
        toast.success(JSON.stringify(data, null, 2))
    }

    return (
        <Card className="w-fit">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
                <CardTitle>One-Time Password</CardTitle>
                        <CardDescription>Please enter the one-time password sent to your phone.</CardDescription>
            </CardHeader>
            <CardContent>
                        <div className="w-full grid place-items-center">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
            </CardContent>
            <CardFooter>
                <Button type="submit">Verify OTP</Button>
            </CardFooter>
            </form>
            </Form>
        </Card>
    )
}