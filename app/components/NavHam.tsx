"use client";
import { useState } from "react";
import Image from "next/image";
function NavHam() {
const items = ['ABOUT US', 'OUR SERVICES', 'CONTACT US', 'DONATE']
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="overflow-x-hidden">
      {!active && (
        <button onClick={handleClick} className="900:hidden">
          <Image
            src="navButton.svg"
            alt="hamburger-button"
            width={40}
            height={40}
          ></Image>
        </button>
      )}

      <div className={active? '' : 'invisible'}>
      <button
        onClick={handleClick}
        className={`${
          active ? "" : "hidden"
        } z-[101] translate-x-[0.05rem] absolute right-2 800:hidden`}
      >
        <Image src="xButton.svg" alt="x-button" width={40} height={40}></Image>
      </button>
     
        <div className= " bg-white h-screen w-screen leading-[2]  pt-10  absolute right-0" >
          <ul className="gap-10 text-x flex-col  items-start p-10 flex-grow justify-end flex">
                {
                    items.map((item) => {
                        return (
                            <li className="font-medium text-[2.5rem] hover:text-[#FFA500] transition duration-300 cursor-pointer">
                            {item}
                          </li>
                        )
                    })
                }
           
          </ul>
        </div>
        </div>
    </div>
  );
}

export default NavHam;
