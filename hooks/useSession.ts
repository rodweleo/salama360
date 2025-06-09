
import { createClient } from "@/utils/supabase/client"
import { useQuery } from "@tanstack/react-query"

export const useSession = () => {
    const client = createClient()

    return useQuery({
        queryKey: ["session"],
        queryFn: async () => {
            const { data, error } = await client.auth.getSession()

            if (error) {
                throw new Error(error.message)
            }

            return data.session
        },
        refetchOnWindowFocus: false,
        refetchInterval: 1000 * 60 * 5, // 5 minutes
    })
}