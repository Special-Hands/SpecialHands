import { prisma } from "@/app/db";
import { NextRequest } from "next/server";
import supabase from "@/app/Utils/supabaseClient";

export default async function deleteSponsee(req: NextRequest) {
  const { path, id } = await req.json();
  try {
    const { data, error } = await supabase.storage
      .from("sponseeImg")
      .remove([path]);
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
  try {
    const removedSponsee = await prisma.sponsee.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }

  return new Response(
    JSON.stringify({ message: "sponsee successfully removed" }),
    {
      status: 200
    }
  );
}
