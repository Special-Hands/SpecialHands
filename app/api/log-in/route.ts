import { NextRequest } from "next/server";
import { logIn } from "./log-in-controllers/login";
import { UUID } from "crypto";
import { validateUser } from "../api-helpers";

export const GET = async(req: NextRequest) => {
    try {
        const isAuthenticated = validateUser(req)
        if (isAuthenticated) {
            const params : any = req.nextUrl.searchParams
            const uid = params.uid
            const user  = await logIn(uid.id)
            return new Response(JSON.stringify(user), {
                status: 200,
                headers: {
                    'Content-type': 'application/json'
                }
            }) 
        } else {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: {
                    'Content-type': 'application/json'
                }
            }) 
        }
       
    } catch(err) {
        const errMessage = err instanceof Error? err.message : 'Unkown Error'
        console.warn(errMessage)
        return new Response(JSON.stringify({ error: errMessage }), {
            status: 404,
            headers: {
                'Content-type': 'application/json'
            }
        }) 
    }
}