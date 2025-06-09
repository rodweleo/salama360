"use client"

import useLoginModal from "@/hooks/use-login-modal"
import { Dialog, DialogContent } from "./ui/dialog"
import LoginForm from "./ui/login-form"

export default function LoginModal() {
    const { isOpen, setOpen } = useLoginModal()

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!isOpen) {
                    setOpen(open)
                } else {
                    setOpen(false)
                }
            }}
        >
            <DialogContent className="p-0 w-[400px]">
                <LoginForm />
            </DialogContent>
        </Dialog>

    )
}