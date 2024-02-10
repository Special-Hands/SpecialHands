import Image from "next/image";
import NavHam from "./NavHam";


export default function NavBar() {
  const items = ['ABOUT US', 'OUR SERVICES', 'CONTACT US', 'DONATE']
  return (
    <div className=" fixed   top-0 z-[50]  bg-transparent">
      <nav className="flex justify-between px-3 py-[0.5rem] items-center w-[100vw] ">
        <Image src="./Logo.svg" alt="logo" width={130} height={130} />
        <ul className="hidden gap-10 text-xl items-center flex-grow justify-end">
         
          <li className="font-medium scale-[0.9] text-white text-xl border-2  px-5 py-2 transition cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]  hover:bg-[white] duration-300">
            DONATE
          </li>
          
          
        </ul>
        <ul className="flex gap-5  800:hidden">
          <li className="font-medium  text-white text-sm border-2  px-5 py-2 transition cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] duration-300">
            DONATE
          </li>
          <NavHam />
        </ul>
      </nav>
    </div>
  );
}
