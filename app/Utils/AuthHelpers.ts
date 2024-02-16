import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
export const isSignedIn = async () => {
    const supabase = createClientComponentClient();
    try {
        const res = await supabase.auth.getSession()
        const token = res.data.session?.user.id!
        return token
    } catch (err) {
        if (err instanceof Error) {
            console.warn(err)
            return null
        }
    }
}