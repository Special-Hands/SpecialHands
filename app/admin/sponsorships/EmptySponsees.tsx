"use client";
import { useState } from "react";
import { SponseeForm } from "./SponseeForm";
export function EmptySponsee() {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    console.log("hi")
    setActive(!active);
   
  };
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <div className="flex flex-col  rounded-xl  w-[75vw] justify-center h-[70vh] gap-10 ">
        <div className="flex flex-col items-center justify-center gap-5 h-full">
          <div className=" text-3xl text-custom-black font-semibold ">
            None so far
          </div>
          <button
            onClick={handleClick}
            className="bg-custom-orange p-2 text-md font-medium rounded-md text-white hover:bg-orange-400">
            Add a Sponsee
          </button>
        </div>
      </div>
      {active && <SponseeForm active={active} setActive={setActive} />}
    </div>
  );
}
