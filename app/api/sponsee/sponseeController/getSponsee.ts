import { prisma } from "@/app/db";
import { NextRequest } from "next/server";

export default async function getSponsee(req: NextRequest) {
    try {
        const { id } = await req.json();
      const data = await prisma.sponsee.findUnique({
          where: {
            id: id
        }
    });

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
