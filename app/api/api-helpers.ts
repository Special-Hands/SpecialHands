import { ValueOf } from "next/dist/shared/lib/constants";
import { prisma } from "../db";
import { user } from "@prisma/client";
import { NextRequest } from "next/server";
import { verify, JwtPayload } from 'jsonwebtoken';

export const findUserBy = async (field: keyof user, val: user[typeof field]) => {
    try { 
        const user = await prisma.user.findFirst({ where: { [field]: val } });
        return user
    } catch(err) {
        if (err instanceof Error) console.error(err.message)
        return null
    }
}


export const validateUser = (req: NextRequest) => {
    try {
        const headers = req.headers;
        const authorizationHeader = headers.get('authorization');
        const token = authorizationHeader?.replace('Bearer ', '');
        if (!token) throw new Error('No token provided')
        const secret = process.env.SUPABASE_JWT_SECRET!
        const decodedToken = verify(token, secret) as JwtPayload
        const urlToCompare = process.env.SUPABASE_URL!
        if (decodedToken.iss !== urlToCompare) throw new Error('Invalid issuer');
        if (Date.now() >= decodedToken.exp! * 1000) throw new Error('Token has expired')
        return true
    } catch(err) {
        const errMessage = err instanceof Error? err.message : 'Unkown Error'
        console.warn(errMessage)
        return false
    }
        
}


