'use client'
import { useState } from "react";
import NavBar from "../components/layout/NavBar"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const options = [
    {
        title: 'Settings',
        icon: '/gear.png'
    },
    {
        title: 'Donations',
        icon: '/heart (3).png'
    },
    {
        title: 'Log-Out',
        icon: '/logout.png'
    }
]



function page() {
    const [selected, setSelected] = useState('Settings')
    const supabase = createClientComponentClient()
    const router = useRouter();
    const handleLogOut = async() => {
        try {
          const { error } = await supabase.auth.signOut();
          if (error) {
            throw error;
          }
          if (localStorage.getItem('user')) localStorage.removeItem('user')
          router.push('/')
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error logging out:', err.message);
            }
          
        }
}
  return (
    <div className="bg-[#f8f7f7] h-screen">
        <div className="invisible">
        <NavBar  transparent={false}/>
        </div>
        
        <div className="flex">
            <div className="w-[30%]">
                <div className="w-[20rem] bg-white pt-2 h-screen  shadow">
                    <h1 className="text-[2rem] font-thin  pl-1">Profile/<Link href='/'><span >Home</span></Link></h1>
                    <ul className="flex flex-col ">
                        {
                            options.map(option => {
                                return (
                                    <li onClick={() => option.title === 'Log-Out'? handleLogOut(): setSelected(option.title)} className={`flex  ${selected === option.title?  'bg-[#eeeeee] opacity-100' :'opacity-60' }     transition-all duration-300 justify-center  pl-5 pt-3 pb-3 w-full m-auto  gap-3`}>
                                        <div className=" w-[1.7rem] translate-y-[12%]  h-[1.7rem]"><Image quality={100} src={option.icon} alt={option.title} width='100' height='100'></Image></div>

                                        <h2 className=' m-auto cursor-pointer w-full text-[1.2rem]'>{option.title}</h2>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-[70%]"></div>
        </div>
    </div>
  )
}

export default page