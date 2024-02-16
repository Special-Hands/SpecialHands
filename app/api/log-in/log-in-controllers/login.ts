import { prisma } from "@/app/db";
import { UUID } from "crypto";
import { NextRequest } from "next/server";
import { findUserBy } from "../../api-helpers";

export const logIn = async(uid: UUID) => {
    const user = await findUserBy('uid', uid)
    if (user) return user
    else throw new Error('User Not Found')
}