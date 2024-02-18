"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { EmptySponsee } from "./EmptySponsees";
interface props {
  active: boolean;
  setActive: (active: boolean) => void;
}
export function SponseeForm({ active, setActive }: props) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File>();
  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmit = async (e: any) => {
    if (!file) return;

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("file", file);

      const res = await fetch("/api/sponsee", {
        method: "POST",
        body: data,
      });
    } catch (err: any) {
      console.error(err);
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white z-[100000]">
      {active && (
        <form
          data-aos="flip-right"
          onSubmit={handleSubmit}
          className="mt-10 p-5 w-fit flex flex-col relative top-0 gap-5 items-center border  rounded-lg shadow-md bg-white">
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold ">Add a Sponsee</h2>
          <div className="w-full">
            <label htmlFor="name" className="block  font-medium">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="border  mt-2 p-2 rounded-md w-full focus:ring-orange-500 focus:border-orange-500"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="description" className="block  font-medium">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="border  mt-2 p-2 rounded-md w-full focus:ring-orange-500 focus:border-orange-500"
              id="description"
              required
              placeholder="Enter a detailed description..."></textarea>
          </div>
          <div className="w-full flex flex-col items-center">
            <label htmlFor="img" className="mt-5 font-medium">
              Upload Image
            </label>
            <input
              onChange={(e) => setFile(e.target.files?.[0])}
              className="file:mt-2 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-custom-orange hover:file:bg-orange-200 cursor-pointer"
              type="file"
              id="img"
              required
            />
          </div>
          <button className="mt-5 bg-custom-orange rounded-md py-2 px-4 text-white hover:bg-orange-400 transition duration-150 ease-in-out">
            Add Sponsee
          </button>
        </form>
      )}
    </div>
  );
}
