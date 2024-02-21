
import { useEffect } from "react";
import ProfileSideBar from "../components/layout/ProfileSide";
import Aos from "aos";
import "aos/dist/aos.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { isSignedIn } from "../Utils/AuthHelpers";
interface LayoutProps {
  children: React.ReactNode; // Define the type for children
}


export default async function ProfileLayout({ children }: LayoutProps) {
    const supabase = createClientComponentClient();
    const user = await isSignedIn()
    console.log(user)
  return (
    <div className="profile-layout">
        {
           user && (
            <div className="flex" >
            <ProfileSideBar />
            {children}
            </div>
           )
            
           
        }
      
    </div>
  );
}
