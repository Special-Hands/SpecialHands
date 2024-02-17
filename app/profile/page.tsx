"use client";
import { useState } from "react";
import NavBar from "../components/layout/NavBar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProfileSideBar from "../components/layout/ProfileSide";
import Profile from "../components/layout/Profile";
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
  const [selected, setSelected] = useState("Overview");
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      if (localStorage.getItem("user")) localStorage.removeItem("user");
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error logging out:", err.message);
      }
    }
  };
  return (
    <div className="bg-white overflow-hidden h-screen">
      <div className="invisible">
        <NavBar transparent={false} />
      </div>

      <div className="flex">
        <ProfileSideBar selected={selected} setSelected={setSelected} />
        <Profile logout={handleLogOut}/>
      </div>
    </div>
  );
}

export default page;
