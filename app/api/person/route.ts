import { NextRequest } from "next/server";
import Person from "./personController"
export const POST = async (req:NextRequest) => await Person.create(req)