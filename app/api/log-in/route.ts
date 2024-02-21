import { NextRequest } from "next/server";
import { logIn } from "./log-in-controllers/login";
import { UUID } from "crypto";
import { validateUser } from "../api-helpers";
import { headers } from 'next/headers'
export const GET = async(req: any) => {
    try {
        const isAuthenticated = validateUser(req)
        if (isAuthenticated) {
            const {searchParams} = new URL(req.url);
            const uid = searchParams.get("uid")
            if (!uid) throw new Error('Serever')
            console.log(uid)
            const user  = await logIn(uid as UUID)
            return new Response(JSON.stringify(user), {
                status: 200,
                headers: {
                    'Content-type': 'application/json'
                }
            }) 
        } else {
            return new Response(JSON.stringify({ error: req }), {
                headers: {
                    'Content-type': 'application/json'
                }
            }) 
        }
       
    } catch(err) {
        const errMessage = err instanceof Error? err.message : 'Unkown Error'
        console.warn(errMessage)
        return new Response(JSON.stringify({ error: errMessage }), {
            headers: {
                'Content-type': 'application/json'
            }
        }) 
    }
}