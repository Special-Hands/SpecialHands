"use client";
import { useState } from "react";
import { BasicButton } from "./Button";
import Image from "next/image";

export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const links = ["About Us", "Programs", "Blog", "Contact"];
  return (
    <div className="p-5 flex sticky top-0 z-50 bg-white">
      <nav className="flex justify-between items-center w-full ">
        <Image src="./Logo.svg" alt="logo" width={100} height={100} />
        <ul className="hidden gap-10 text-xl items-center flex-grow justify-end 800:flex">
          <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
            ABOUT US
          </li>
          <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
            OUR SERVICES
          </li>
          <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
            CONTACT US
          </li>
          <li className="font-medium text-white text-xl border-2  px-5 py-2 transition cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]  hover:bg-[white] duration-300">
            DONATE
          </li>
        </ul>
        <ul className="flex gap-5  800:hidden">
          <li className="font-medium text-white text-sm border-2  px-5 py-2 transition cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]  hover:bg-[white] duration-300">
            DONATE
          </li>
          <button onClick={handleClick} className="900:hidden">
            <Image
              src="navButton.svg"
              alt="hamburger-button"
              width={40}
              height={40}></Image>
          </button>
          <button onClick={handleClick} className={`${active? "": "hidden"} z-[101] absolute right-5 800:hidden`}>
            <Image
              src="xButton.svg"
              alt="x-button"
              width={40}
              height={40}></Image>
          </button>
          {active && (
            <div className=" bg-white h-screen w-screen  z-100 absolute right-0">
              <ul className="gap-10 text-x flex-col  items-start p-10 flex-grow justify-end flex">
                <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
                  ABOUT US
                </li>
                <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
                  OUR SERVICES
                </li>
                <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
                  CONTACT US
                </li>
                <li className="font-medium text-white text-xl border-2  px-5 py-2 transition cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]  hover:bg-[white] duration-300">
                  DONATE
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}
