import { NextRequest } from "next/server";
import { signUp } from "./sign-up-controllers/sign-up";

export const POST = async(req: NextRequest) => {
    try {
        const user = await req.json()
        if (!user) throw new Error('No request body found')
        const success = await signUp(user)
        if (!success) throw new Error('bruhrhhr')
        return new Response(JSON.stringify(success), {
            status: 200,
            headers: {
                'Content-type': 'application/json'
            }
        }) 
    } catch(err) {
            const errMessage = err instanceof Error? err.message: 'Unknown Error'
            console.warn(errMessage)
            return new Response(JSON.stringify({error: errMessage}), {
                status: 400,
                headers: {
                    'Content-type': 'application/json'
                }
            }) 

    }
}