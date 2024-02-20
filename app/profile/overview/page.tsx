'use client'
import Profile from '@/app/components/layout/Profile'
import ProfileSideBar from '@/app/components/layout/ProfileSide';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function page() {
  useEffect(() => {
    Aos.init()
}, [])
    const router = useRouter();
    const supabase = createClientComponentClient()
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
    <div data-aos='fade' className='flex'>

        <Profile logout={handleLogOut}/>

    </div>
  )
}

export default page