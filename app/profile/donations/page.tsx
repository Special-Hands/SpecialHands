'use client'
import ProfileSideBar from '@/app/components/layout/ProfileSide'
import UserDonations from '@/app/components/layout/UserDonations'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function page() {
  useEffect(() => {
    Aos.init()
}, [])
  return (
    <div data-aos='fade' className='flex'>

        <UserDonations />
    </div>
  )
}

export default page