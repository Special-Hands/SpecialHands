"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";
import { Button } from "@mui/material";
import { authParams } from "../login/page";

export default function SignUp() {
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
        name: name,
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
        className=" shadow sign-card  rounded pt-[50px]  inset-[0] justify-center m-auto  w-[25rem] h-[35rem]"
        id="sign-up"
      >
        <img
          className="m-auto"
          src="https://static.thenounproject.com/png/70749-200.png"
          width="40px"
        ></img>
        <h1 className="font-[450] text-center">Sign-Up!</h1>
        <p className="text-center pb-10">Create your account</p>
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
            className="w-[10rem] bg-black rounded m-auto mt-10 text-white hover:opacity-[80%] h-[2.5rem]"
          >
            {" "}
            Complete Sign-up
          </button>
        </form>
      </div>
    </div>
  );
}
