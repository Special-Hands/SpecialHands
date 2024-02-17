"use client";
import Link from "next/link";
import Image from "next/image";
import NavHam from "../ui/NavHam";
import { quickFetch } from "@/app/Utils/fetchHelpers";
import { useState, useEffect, useRef } from "react";
import { isSignedIn } from "@/app/Utils/AuthHelpers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import UserIcon from "../ui/UserIcon";
interface NavProps {
  transparent?: boolean;
  slideOut?: boolean
}
export default function NavBar({ transparent = true, slideOut = false }: NavProps) {
  const items = ["ABOUT US", "OUR SERVICES", "CONTACT US"];
  const [userName, setUserName] = useState(localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')!).name  : '')
  const [isAuthenticated, setIsAuthenticated] = useState((localStorage.getItem('user')? true: false));
  
  const navScroll = useRef<HTMLDivElement>(null);
  const [white, setWhite] = useState(false);


  //confirm user is signed in
  useEffect(() => {
    const checkAuth = async() => {
    const supabase = createClientComponentClient();
    const session = await supabase.auth.getSession()
    if (!session.data) {
      setIsAuthenticated(false);
      if (localStorage.getItem('user')) localStorage.removeItem('user')
    } 
    }
    checkAuth()
  }, [])
  
  //handle user signing out
  const supabase = createClientComponentClient()
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      if (localStorage.getItem('user')) localStorage.removeItem('user')
    }
  })




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
      style={slideOut? {animation: 'slideOut 0.5s ease-in-out forwards'} : {}}
      ref={navScroll}
      className={
        transparent
          ? " transition-[background] duration-300  fixed active text-white  top-0 z-[50]  bg-transparent"
          : " transition-[background] duration-300  fixed active text-black  top-0 z-[50]  bg-white"
      }
    >
      <nav  className="flex  duration-400 justify-between px-3 py-[0.5rem] pl-[2rem] p-4 items-center w-screen ">
        <Link href="/">
          <Image
            className={white || !transparent ? "opacity-100" : "opacity-[70%]"}
            src="./Logo.svg"
            alt="logo"
            width={110}
            height={110}
          />
        </Link>
        <ul className=" gap-7 pr-7  flex text-xl items-center flex-grow justify-end">
          {items.map((item) => {
            return (
              <li key={item} className=" mid:hidden text-[1.3rem] cursor-pointer  hover:border-b-[0.5rem] hover:border-[orange] hover:text-[orange] transition-all duration-300">
                {item}
              </li>
            );
          })}
        </ul>
       {isAuthenticated?<Link href='/profile'><UserIcon name={userName? userName[0]: ''} /></Link> : <Link href='/login'><p className=" font-medium  transition-all text-[orange] duration-300 translate-x-0   text-sm border-2  px-5 py-2  cursor-pointer border-[orange] hover:opacity-[70%]  bg-[transparent]     mr-1"> LOG IN</p></Link>}
        <ul className="flex gap-5 text-white ">
        
          <li className="font-medium  transition-all duration-300 translate-x-0   text-sm border-2  px-5 py-2  cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] ">
            DONATE
          </li>
          <NavHam white={white} transparent={transparent} />
        </ul>
      </nav>
    </div>
  );
}
