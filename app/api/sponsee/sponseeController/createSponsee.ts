import { prisma } from "@/app/db";
import { NextRequest } from "next/server";
import supabase from "@/app/Utils/supabaseClient";

export default async function createSponsee(req: NextRequest) {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;
  const name: string = data.get("name") as string;
  const description: string = data.get("description") as string;

  if (!file) {
    return new Response("file invalid", {
      status: 500,
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const mimeType = file.type;
  const fileName = file.name;

  const { error } = await supabase.storage
    .from("sponseeImg")
    .upload(`uploads/${fileName}`, buffer, {
      contentType: mimeType,
      upsert: true,
    });

  if (error) {
    console.error(error);
    return new Response("Failed to upload file", {
      status: 500,
    });
  }

  const bucketName = "sponseeImg";
  const filePath = `uploads/${fileName}`;
  const supabaseUrl = process.env.SUPABASE_URL;
  const projectId = supabaseUrl?.split(".")[0].split("//")[1];
  const fileUrl = `https://${projectId}.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;

  const sponsee = await prisma.sponsee.create({
    data: {
      name: name,
      info: description,
          url: fileUrl,
      path: filePath
    },
  });
    
    return new Response(JSON.stringify(sponsee), {
        status:200
    })
}
