'use client'
import Image from "next/image";
import NavHam from "./NavHam";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
export default function NavBar() {
  const items = ['ABOUT US', 'OUR SERVICES', 'CONTACT US']
  const navScroll = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    if (window.scrollY >= 700) {
      navScroll.current!.style.background = 'white';
      navScroll.current!.style.color = 'black';
    } else {
      navScroll.current!.style.background = 'black';
      navScroll.current!.style.color = 'white';
      navScroll.current!.style.background = 'transparent'; // Ensure to reset the background as needed
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  
  return (
    <div ref={navScroll} className=" transition-[background] duration-300  fixed active text-white  top-0 z-[50]  bg-transparent">
      <nav className="flex justify-between px-3 py-[0.5rem] items-center w-screen ">
        <Image src="./Logo.svg" alt="logo" width={100} height={100} />
        <ul className=" gap-10 pr-10  flex text-xl items-center flex-grow justify-end">

          {
            items.map((item) => {
              return (
                <li className=" mid:hidden cursor-pointer  hover:border-b-[0.5rem] hover:border-[orange] hover:text-[orange] transition-all duration-300">{item}</li>
              )
            })
          }
          
        </ul>
        <ul className="flex gap-5 text-white 800:hidden">
          <li className="font-medium  transition-all duration-300 translate-x-0   text-sm border-2  px-5 py-2  cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] ">
            DONATE
          </li>
          <NavHam />
        </ul>
      </nav>
    </div>
  );
}
