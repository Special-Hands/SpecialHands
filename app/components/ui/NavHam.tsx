"use client";
import { useState, useRef } from "react";
import Image from "next/image";
interface HamProps {
  white: boolean;
  transparent: boolean
}
function NavHam({ white = false, transparent = true }: HamProps) {
  const items = ["HOME","ABOUT US", "OUR SERVICES", "CONTACT US", "DONATE"];
  const [active, setActive] = useState(false);
  const slide = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setActive(!active);
    if (active) {
      slide.current!.style.right = "-100%";
      slide.current!.style.transform = "translateY(-3.85rem)";
    } else {
      slide.current!.style.right = "0";
      slide.current!.style.transform = "translateY(-3.85rem)";
    }
  };

  return (
    <div className="overflow-x-hidden    w-full">
        
        <button
          onClick={handleClick}
          className={`${active && 'invisible'} hidden xsmall:ml-3 nav:block translate-y-[0.3rem]`}
        >
          <Image
            
            src={white || !transparent ? "/navButton-bl.svg" : "navButton.svg"}
            alt="hamburger-button"
            width={40}
            height={40}
          ></Image>
        </button>
      {/* --------------------------------------------------- */}
      {/* SLIDING MENU */}
      <div
        ref={slide}
        className="absolute right-[-100%] transition-[right] transition-300 "
      >
        <div className=" bg-white h-[110vh] w-screen leading-[2] translate-y-[-0.5rem]   pt-10  absolute right-0">
          <div>
            <button
              onClick={handleClick}
              className={`${
                active ? "  z-[101] translate-x-[0.05rem] absolute right-2 800:hidden" : ""
              } z-[101]  translate-x-[0.05rem] absolute right-2 800:hidden`}
            >
              <Image
                src="xButton.svg"
                alt="x-button"
                width={50}
                height={50}
              ></Image>
            </button>
          </div>
          <ul className="gap-10 text-x flex-col  translate-y-[3.5rem] items-start flex-grow justify-end flex">
            {items.map((item) => {
              return (
                <li key={item} className="font-medium  text-black transition-all duration-300 text-[2.5rem] hover:text-[#FFA500] pl-10 hover:border-l-[1rem] hover:border-[orange]  cursor-pointer">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}

export default NavHam;
