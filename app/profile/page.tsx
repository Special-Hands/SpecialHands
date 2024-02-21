"use client";
import { useState } from "react";
import NavBar from "../components/layout/NavBar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProfileSideBar from "../components/layout/ProfileSide";
import Profile from "../components/layout/Profile";
import UserDonations from "../components/layout/UserDonations";
const options = [
  {
    title: "Settings",
    icon: "/gear.png",
  },
  {
    title: "Donations",
    icon: "/heart (3).png",
  },
  {
    title: "Log-Out",
    icon: "/logout.png",
  },
];

function page() {

  const supabase = createClientComponentClient();
  const router = useRouter();
 
  return (
    <div className="bg-white overflow-x-hidden h-screen">
      <div className="invisible">
        <NavBar transparent={false} />
      </div>

      <div className="flex mid:translate-x-[-15rem]">
        <div className=""> 
          <ProfileSideBar  />
        </div>
        

          
      </div>
    </div>
  );
}

export default page;
