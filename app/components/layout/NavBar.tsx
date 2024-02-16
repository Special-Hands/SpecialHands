"use client";
import Link from "next/link";
import Image from "next/image";
import NavHam from "../ui/NavHam";

import { useState, useEffect, useRef } from "react";
import { isSignedIn } from "@/app/Utils/AuthHelpers";
interface NavProps {
  transparent?: boolean;
}
export default function NavBar({ transparent = true }: NavProps) {
  const items = ["ABOUT US", "OUR SERVICES", "CONTACT US"];
  const [user, setUser] = useState(false);
  const navScroll = useRef<HTMLDivElement>(null);
  const [white, setWhite] = useState(false);

  //check if user is signed in
  useEffect(() => {
    const checkAuth = async() => {
    const isAuthenticated =  await isSignedIn()
    if (isAuthenticated){
      
    }
    }
    checkAuth()
  }, [])
  
  




  //navbar goes from transparent to white when user scrolls to a certain point
  const handleScroll = () => {
    if (transparent) {
      setWhite(true);
      if (window.scrollY >= 100) {
        navScroll.current!.style.background = "white";
        navScroll.current!.style.color = "black";
      } else {
        setWhite(false);
        navScroll.current!.style.background = "black";
        navScroll.current!.style.color = "white";
        navScroll.current!.style.background = "transparent";
      }
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      ref={navScroll}
      className={
        transparent
          ? " transition-[background] duration-300  fixed active text-white  top-0 z-[50]  bg-transparent"
          : " transition-[background] duration-300  fixed active text-black  top-0 z-[50]  bg-white"
      }
    >
      <nav className="flex justify-between px-3 py-[0.5rem] pl-[2rem] p-4 items-center w-screen ">
        <Link href="/">
          <Image
            className={white || !transparent ? "opacity-100" : "opacity-[70%]"}
            src="./Logo.svg"
            alt="logo"
            width={110}
            height={110}
          />
        </Link>
        <ul className=" gap-10 pr-10  flex text-xl items-center flex-grow justify-end">
          {items.map((item) => {
            return (
              <li className=" mid:hidden text-[1.3rem] cursor-pointer  hover:border-b-[0.5rem] hover:border-[orange] hover:text-[orange] transition-all duration-300">
                {item}
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-5 text-white ">
          <li className="font-medium  transition-all duration-300 translate-x-0   text-sm border-2  px-5 py-2  cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] ">
            DONATE
          </li>

          <NavHam white={white} />
        </ul>
      </nav>
    </div>
  );
}
