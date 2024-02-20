"use client";
import { useEffect } from "react";
import ProfileSideBar from "../components/layout/ProfileSide";
import Aos from "aos";
import "aos/dist/aos.css";
interface LayoutProps {
  children: React.ReactNode; // Define the type for children
}
export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <div className="profile-layout flex">
      <ProfileSideBar />
      {children}
    </div>
  );
}
