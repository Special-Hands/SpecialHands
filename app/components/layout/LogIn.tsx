"use client";

import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { authParams } from "../../login/page";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";
import { Button } from "@mui/material";
import Aos from "aos";
import Link from "next/link";
import { isSignedIn } from "../../Utils/AuthHelpers";
import { quickFetch } from "@/app/Utils/fetchHelpers";
import AuthAlert1 from "../ui/AuthAlert1";

export default function LogIn() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogIn = async () => {
    try {
      setInvalid(false);
      await supabase.auth.signInWithPassword({ email, password });
      const userCred = await isSignedIn();
      console.log(userCred)
      const url = `api/log-in?uid=${userCred?.id}`;
      const user = await quickFetch(
        url,
        "get",
        {},
        { Authorization: `Bearer ${userCred?.webToken}` }
      );
      console.log(user)
      if (user.name) {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.name, email: user.email })
        );
        console.log(user.name);
        router.push("/");
      } else {
        setInvalid(true);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.warn(err);
      }
    }
    router.refresh();
    if (!invalid) {
      setEmail("");
      setPassword("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogIn();
  };

  return (
    <div className="">
      <div
        data-aos="zoom-in"
        className=" shadow sign-card bg-white rounded pt-[50px] inset-[0] justify-center m-auto  w-[400px] h-[500px]"
        id="sign-up"
      >
        <div className="flex "></div>
        <h1 className="font-[300] text-[2rem] text-center">Welcome!</h1>
        <p className="text-center text-[1.3rem] ">Sign in to your account</p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="m-auto mt-10 flex flex-col gap-3 w-[80%]"
        >
          <div className="flex justify-center flex-col">
            <label
              className="font-[450] text-[0.9rem] text-gray-400"
              htmlFor="email"
            >
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
            <label
              className="font-[450] text-[0.9rem] text-gray-400"
              htmlFor="password"
            >
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
            className="w-[10rem] bg-[orange] rounded m-auto mt-5 text-white hover:opacity-[80%] h-[2.5rem]"
          >
            {" "}
            Log-In
          </button>
          <Link href="/signup">
            <p className="text-center text-[0.8rem] mb-8">
              Dont have an account?<span className="underline">Sign Up</span>
            </p>
          </Link>
        </form>
      </div>
      {invalid && (
        <div className="pt-5">
          <AuthAlert1 />
        </div>
      )}
    </div>
  );
}
