"use client";
import { useState } from "react";
import { authParams } from "../login/page";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";
import { Button } from "@mui/material";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogIn = async () => {
    try {
      await supabase.auth.signInWithPassword({ email, password });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
    router.refresh();
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogIn()
  }

  return (
    <div className="">
      <div
        data-aos="flip-right"
        className=" shadow sign-card rounded pt-[50px] inset-[0] justify-center m-auto  w-[400px] h-[500px]"
        id="sign-up"
      >
        <img
          className="m-auto"
          src="https://static-00.iconduck.com/assets.00/login-icon-1024x854-wqjh0ggy.png"
          width="40px"
        ></img>
        <h1 className="font-[450] text-center">Welcome!</h1>
        <p className="text-center pb-10">Sign in to your account</p>

        <form onSubmit={(e) => handleSubmit(e)} className="m-auto flex flex-col gap-3 w-[80%]">
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              name="email"
              className="pl-1 h-[30px] border-b"
            ></input>
          </div>

          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              name="password"
              type="password"
              className=" pl-1 h-[30px] border-b"
            ></input>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex gap-1">
              <input className="" type="checkbox"></input>
              <label
                className="text-[15px] text-[#4e4d4d] font-light"
                htmlFor="savePass"
              >
                Save password?
              </label>
            </div>
            <p className="text-[15px] underline cursor-pointer text-[#4e4d4d]">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="w-[10rem] bg-black rounded m-auto mt-10 text-white hover:opacity-[80%] h-[2.5rem]"
          >
            {" "}
            Log-In
          </button>
        </form>
      </div>
    </div>
  );
}
