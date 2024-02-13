"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";
import { Button } from "@mui/material";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
export interface authParams {
    name?: string;
    email: string;
    password: string;
    options?: object;
  }

export default function LogInPage() {

  return (
    <div>
        <SignUp />
        <LogIn  />
    </div>
  );
}
