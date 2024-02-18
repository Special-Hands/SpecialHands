import { prisma } from "@/app/db";
import { NextRequest } from "next/server";

export default async function getAllSponsees(req: NextRequest) {
    try {
      const data = await prisma.sponsee.findMany();
  
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
      });
    }
  }