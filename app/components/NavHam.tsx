"use client";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";

function NavHam() {
  const items = ["ABOUT US", "OUR SERVICES", "CONTACT US", "DONATE"];
  const [active, setActive] = useState(false);
  const slide = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      slide.current!.style.color = "black";
      slide.current!.style.right = "100%";
      slide.current!.style.transform = "translateY(0rem)";
    } else {
      slide.current!.style.color = "";
      slide.current!.style.right = "0rem";
      slide.current!.style.transform = "translateY(1rem)";
    }
  }, [active]);
  return (
    <div className="overflow-x-hidden  w-full">
      <button
        onClick={() => handleClick()}
        className={
          active
            ? " mid:block  translate-y-[0.3rem] translate-x-[-23rem] hidden "
            : " mid:block hidden translate-y-[0.3rem] "
        }
      >
        <Image
          src="navButton.svg"
          alt="hamburger-button"
          width={40}
          height={40}
        ></Image>
      </button>

      <div
        ref={slide}
        className="absolute right-[0]  transition-[right] duration-300"
      >
        <div
          className={
            active
              ? "  bg-white h-[200vh] w-screen leading-[2] translate-y-[-3.8rem]   pt-10  absolute "
              : " bg-white h-[100vh] w-screen leading-[2] translate-y-[-4.8rem]   pt-10  absolute "
          }
        >
          <div>
            <button
              onClick={() => handleClick()}
              className={`${
                active ? "" : "hidden"
              } z-[101] translate-x-[0.05rem] absolute right-2 800:hidden`}
            >
              <Image
                src="xButton.svg"
                alt="x-button"
                width={40}
                height={40}
              ></Image>
            </button>
          </div>
          <ul className="gap-10 text-x flex-col  items-start flex-grow justify-end flex">
            {items.map((item) => {
              return (
                <li className="font-medium transition-all duration-300 text-[2.5rem] hover:text-[#FFA500] pl-10 hover:border-l-[1rem] hover:border-[orange]  cursor-pointer">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavHam;
