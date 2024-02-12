"use client"
import Image from "next/image";
import Link from "next/link";
import { sideBarItems } from ".";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const pathname = usePathname()
    console.log(pathname)

  return (
    <div className="p-5 flex flex-col bg-[#F9FAFB] w-[15rem] h-screen gap-4  transition">
      <Image src="/Logo.svg" width={100} height={100} alt="logo"></Image>
      <h2 className="text-2xl text-[#D0D3DB] font-bold">MAIN MENU</h2>
      <ul className="flex flex-col gap-4 ">
        {sideBarItems.map((item) => {
          return (
            <div className={`${pathname === `/admin/${(item[0] as string).toLowerCase()}` ? "text-orange-500 bg-white p-1 rounded-lg": ""}`}>
              <Link href={`/admin/${(item[0] as string).toLowerCase()}`}>
                <li className="flex gap-3 items-center ">
                  {item[1]}
                  <h2 className="text-xl">{item[0]}</h2>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}