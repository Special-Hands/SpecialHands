import { NextRequest } from "next/server";
import Sponsee from "./sponseeController"

export const POST = async (req:NextRequest) => await Sponsee.create(req)