import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
export const isSignedIn = async () => {
    const supabase = createClientComponentClient();
    try {
        const res = await supabase.auth.getSession()
        const webToken = res.data.session?.access_token
        const id = res.data.session?.user.id!
        console.log(res)
        return {webToken, id}
    } catch (err) {
        if (err instanceof Error) {
            console.warn(err)
            return null
        }
    }
}