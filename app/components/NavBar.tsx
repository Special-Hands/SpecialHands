import Image from "next/image";
import NavHam from "./NavHam";


export default function NavBar() {
  const items = ['ABOUT US', 'OUR SERVICES', 'CONTACT US', 'DONATE']
  return (
    <div className=" sticky   top-0 z-[50]  bg-white">
      <nav className="flex justify-between px-3 py-[0.5rem] items-center w-full ">
        <Image src="./Logo.svg" alt="logo" width={100} height={100} />
        <ul className="hidden gap-10 text-xl items-center flex-grow justify-end 800:flex">
          {
            items.map(item => {
              return (
                <li className="font-medium text-xl hover:text-[#FFA500] transition duration-300 cursor-pointer">
                  {item}
              </li>
              )
            })
          }
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
