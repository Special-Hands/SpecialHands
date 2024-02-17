import { prisma } from "@/app/db";
import { NextRequest } from "next/server";
interface UserSignUp {
    email: string,
    id: string,
    name: string
}
export const signUp = async ({name, email, id} : UserSignUp) => {
    try {
        const user = await prisma.user.create({ data: { email: email, name: name, uid: id } })
        return user
    } catch(err) {
        if (err instanceof Error) {
            console.warn(err.message)
            return undefined
        }
    }
}