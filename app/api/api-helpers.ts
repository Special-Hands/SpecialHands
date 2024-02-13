import { ValueOf } from "next/dist/shared/lib/constants";
import { prisma } from "../db";
import { user } from "@prisma/client";

export const findUserBy = async (field: keyof user, val: user[typeof field]) => {
    try { 
        const user = await prisma.user.findFirst({ where: { [field]: val } });
        return user
    } catch(err) {
        if (err instanceof Error) console.error(err.message)
        return null
    }
}

