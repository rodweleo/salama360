"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./form"
import { login } from "@/app/actions/auth"
import toast from "react-hot-toast"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import useLoginModal from "@/hooks/use-login-modal"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(10, {
        message: 'Password must be at least 10 characters.',
    }),

})
export default function LoginForm() {
    const [isSubmitting, setSubmitting] = useState(false)
    const router = useRouter()
    const { setOpen } = useLoginModal()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleLogin = async (values: z.infer<typeof LoginSchema>) => {
        setSubmitting(true)

        const formData = new FormData()
        formData.set("email", values.email)
        formData.set("pass", values.password)

        const { success, message, role } = await login(formData)

        if (!success) {
            toast.error(message)
            setSubmitting(false)
            return
        }

        toast.success(message)
        setSubmitting(false)

        setOpen(false)
        router.push(`/app/account/${role}`)
    }

    return (
        <Card className="w-full max-w-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} >
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Enter your credentials to access the system</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2.5">
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

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="space-y-5 flex flex-col w-full">
                            <Button type="submit" disabled={isSubmitting} className="disabled:bg-slate-600 disabled:cursor-not-allowed">
                                {
                                    isSubmitting ? <div className="flex items-center gap-2.5">
                                        <Loader2 className="animate-spin" />
                                        <span>Please Wait</span>
                                    </div> :
                                        <span>Login</span>
                                }
                            </Button>
                            <div className="flex items-center justify-between">
                                <Button variant="link" type="button" onClick={() => router.push("/register")}>
                                    Create an account
                                </Button>
                                <Button variant="link" type="button" onClick={() => router.push("/app/auth/forgot-password")}>
                                    Forgot password?
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}