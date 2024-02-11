"use client";
import { useState } from "react";

export function PersonForm() {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <button className="bg-[#FFA500] text-white p-2" onClick={handleClick}>
        Add Person
      </button>

      {active && (
        <form className="flex border  mt-10 flex-col p-5  gap-5 items-center">
          <h2 className="font-bold">add a person</h2>
          <div>
            <label htmlFor="name">name </label>
            <div>
              <input
                className="border mt-2 p-1 rounded-md"
                type="text"
                id="name"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="description">description</label>
            </div>
            <div>
              <input
                className="border mt-2 p-1 rounded-md"
                id="description"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <label htmlFor="img" className="mt-10">upload Image</label>
            </div>
            <div>
              <input className="mt-5 p-0 self-center ml-20" type="file" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
