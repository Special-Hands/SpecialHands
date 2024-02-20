'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideBarItems } from "../sideBarItems";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileSideBar() {

  const path = usePathname()
  const router = useRouter()
  return (
    <div className="p-5 flex flex-col bg-[#f8f7f7] w-[15rem] mid:hidden h-screen  overflow-x-[hidden] gap-4   transition">
      {/* <Image src="/Logo.svg" width={100} height={100} alt="logo"></Image> */}
      <h2 className="text-[1.7rem] text-dash-gray font-normal">Account</h2>
      <ul className="flex flex-col gap-4 ">
        {sideBarItems.map((item) => {
          return (
            <div className={`cursor-pointer transition-all duration-200 ${path === `/profile/${(item[0] as string).toLowerCase()}` ? "text-[orange] bg-white pl-1 rounded-lg": "text-dash-gray"}`}>
                <li onClick={() => {
                  router.push(`/profile/${(item[0] as string).toLowerCase()}`);
  
                }} className="flex gap-3 items-center ">
                  {item[1]}
                  <h2 className="text-xl p-1" >{item[0]}</h2>
                </li>
            </div>
          );
        })}
        <Link href='/'><h2 className="text-xl pl-1   text-dash-gray font-semi-bold flex gap-3"><span>←</span><span>Go Back</span></h2></Link>
      </ul>
    </div>
  );
}