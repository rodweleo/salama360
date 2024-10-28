import {Button} from "@/components/ui/button"
export default function Page(){
    return (
        <div>
            <section className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Users</h1>
                <Button>EDIT USERS</Button>
            </section>
        </div>
    )
}