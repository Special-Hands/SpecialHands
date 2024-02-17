"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ItemsObj {
  title: string;
  icon: string;
  body: string;
  index: number;
}
interface actionProps {
  items: Array<ItemsObj>;
}

function Actions({ items }: actionProps) {
  const [isHovered, setIsHovered] = useState<Array<boolean>>(
    Array(items.length)
  );
  const handleHover = (index: number) => {
    setIsHovered((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <div className="flex flex-wrap  gap-[8rem]">
      {items.map((item) => {
        return (
          <div key={item.title} className="m-auto">
            <div
              onMouseEnter={() => handleHover(item.index)}
              onMouseLeave={() => handleHover(item.index)}
              key={item.title}
              className="out transition-all cursor-pointer border-[0.1rem] border-[orange] hover:border-opacity-0 duration-[0.3s] bg-[orange]   rounded-[100%] relative"
            >
              <div className="  transition-all duration-300 rounded-[100%]    p-[3.4rem]">
                <Image
                  className={`${
                    isHovered[item.index]
                      ? "scale-[0.9]   translate-y-[-15%] "
                      : "scale-[1] "
                  } transition-all duration-300  w-[10rem]`}
                  width="150"
                  height="150"
                  alt={item.title}
                  src={item.icon}
                ></Image>
              </div>
              <div
                className={`${
                  isHovered[item.index]
                    ? " translate-y-[-0rem] visible opacity-1"
                    : "opacity-0 invisible translate-y-[1rem]"
                } absolute    text-[white]  transition-all duration-200   flex  justify-center  inset-0 m-auto rounded-[100%]`}
              >
                <h1 className=" translate-y-[70%]  transition-all duration-300   font-medium text-[2rem]">
                  {item.title.toUpperCase()}
                </h1>
              </div>
            </div>
            <div className="relative">
              <p className=" mt-[1.5rem]  w-[15rem] text-[1.2rem] text-gray-700 m-auto">
                {item.body}
              </p>
              <button className="   text-white w-[11.875rem] mt-[1.25rem]  h-[3.4375rem] border-[0.1875rem] border-[orange]   bg-[orange]  hover:bg-[white] hover:border-[0.1875rem] hover:text-[rgb(255,165,0)] hover:border-[orange] transition-all duration-[0.3s] ease-in-out  ">
                {item.title.toUpperCase()}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Actions;
