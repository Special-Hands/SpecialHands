import { NextRequest } from "next/server";
import Sponsee from "./sponseeController";

export const POST = async (req: NextRequest) => await Sponsee.create(req);
export const GET = async (req: NextRequest) => await Sponsee.read(req);
export const DELETE = async (req: NextRequest) => await Sponsee.destroy(req);
