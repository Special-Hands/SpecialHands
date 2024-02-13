"use client";
import 'aos/dist/aos.css';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { authParams } from "../login/page";
import Aos from "aos";
import Link from "next/link";
export default function SignUp() {
  useEffect(() => {
    Aos.init()
  }, [])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const params: authParams = {
      email,
      password,
      options: {
        emailRedirect: `${location.origin}/auth/callback`,
      },
      
    };

    try {
      await supabase.auth.signUp(params);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
    router.refresh();
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <div>
      <div
        data-aos='flip-right'
        className=" shadow sign-card  bg-white  rounded pt-[50px]  inset-[0] justify-center m-auto  w-[25rem] h-[31rem]"
        id="sign-up"
      >
        
        <h1 className="font-[300] text-[2rem] text-center">Sign-Up!</h1>
        <p className="text-center text-[] ">Create your account</p>
        <Link href='/login'><p  className="text-center text-[0.8rem] mb-8">Have an account?<span className="underline" >Log In</span></p></Link>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="m-auto flex flex-col gap-3 w-[80%] "
        >
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" h-[30px] pl-1 border-b"
              type="text"
            ></input>
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className=" h-[30px] pl-1 border-b"
            ></input>
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              className=" h-[30px] pl-1 border-b"
            ></input>
          </div>
          <button
            type="submit"
            className="w-[10rem] bg-[orange] rounded m-auto mt-6 text-white hover:opacity-[80%] h-[2.5rem]"
          >
            {" "}
            Complete Sign-up
          </button>
        </form>
      </div>
    </div>
  );
}
