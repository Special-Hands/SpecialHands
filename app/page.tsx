"use client";
import Image from "next/image";

const provideInfo = [
  {
    title: "Education",
    bg: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/graduation-hat (1).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },
  {
    title: "Food",
    bg: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/restaurant.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },

  {
    title: "Social Service",
    bg: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/customer.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ",
  },
];

export default function Home() {
  return (
    <div className="">
      <div id="land" className=" flex h-[90vh]  relative">
        <div className="absolute h-[100%] w-[100%] bg-black opacity-[80%]"></div>
        <div className="w-full  overflow-hidden">
          <img
            className=" h-full object-cover "
            width="100%"
            src="/specialArtboard 1.svg"
          ></img>
          <div className="absolute w-[50rem] pl-[7%]   pt-[25vh] text-white  overflow-hidden top-0  flex flex-col med:justify-center  med:leading-[2]  med:w-[40rem] med:text-center med:inset-0   med:m-auto  med:pl-[0] medsm:w-[30rem] medsm:pt-[15vw] small:w-[23rem] small:pt-[25vw] small:leading-[3] xsmall:w-[15rem] xsmall:leading-[2] xsmall:pt-[25vw] ">
            <h1 className="small:text-[2.3rem]">
              Together, let's reach out for change{" "}
              <span className="text-[#ffa500] small:text-[2.3rem]">
                one hand at a time
              </span>
            </h1>


            <p className=" text-[1.4375rem] sm:text-[1.1rem]">

              Your support matters more than ever.
            </p>
            <button className=" hover:orangeShadow w-[11.875rem] mt-[1.25rem]  h-[3.4375rem] border-[0.1875rem] border-[orange]   bg-[orange]  hover:bg-[white] hover:border-[0.1875rem] hover:text-[rgb(255,165,0)] hover:border-[orange] transition-all duration-[0.3s] ease-in-out med:mt-[1.8rem] med:m-auto ">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[5rem] m-auto">
        <div className="text-center">
          <div className="flex justify-center gap-2">
            <h3 className=" text-[orange]  text-[1.25rem]">Service </h3>
            <div className="w-[3.125rem] border-b-[0.125rem]  translate-y-[-45%] border-[orange]"></div>
          </div>
          <h1 className=" ">We Provide</h1>
        </div>
        <div className=" pt-10 flex flex-wrap justify-between w-[100%]  pl-[7%] pr-[7%] m-auto gap-10">
          {provideInfo.map((item) => {
            return (
              <div key={item.title} className="relative w-[21.875rem] cursor-pointer  flex-shrink-0 overflow-hidden text-black m-auto xsmall:w-[18.75rem]">
                <div className="overflow-hidden">
                  <img
                    className="transition-all duration-[0.4s] hover:scale-[1.05] "
                    width="100%"
                    height="100%"
                    src={item.bg}
                  ></img>
                </div>
                <div className=" mt-[1.25rem] ">
                  <div className="w-[90%] m-auto">
                    <div>
                      <h2 className="text-[1.875rem] font-bold">
                        {item.title.toUpperCase()}
                        <span className=" pl-3 opacity-100 text-[orange] group-hover:opacity-0">
                          &rarr;
                        </span>
                      </h2>
                    </div>

                    <p className="text-[0.9375rem] ">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-[orange] rip mt-[13rem]">
        <div className="flex larg:flex-col   justify-around">
          <Image
            className=" realtive translate-y-[-14rem] larg:translate-y-[-10rem] larg:m-auto mt-[5rem] medsm:w-[90%] "
            alt="Karina giving out supplies to people in need"
            width="550"
            height="550"
            src="aboutpic.svg"
          ></Image>
          <div className=" pt-10 larg:translate-y-[-9rem] larg:w-[80%] larg:m-auto   text-white w-[35%]">
            <h1 className="lg:text-[2rem] larg:m-auto small:text-[1.6rem]">
              ABOUT US
            </h1>
            <p className="text-[2rem] lg:text-[1.5rem] small:text-[1.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <img src="rip.svg" className="translate-y-[-0.05rem]"></img>
      </div>
      <div className="mt-[5rem] ml-[7%]">
        <div>
          
        <h1>WE NEED YOU</h1>
        <div className="flex gap-5">
         <p  className='text-[orange]'>What you can do</p>
         <div className="w-[3.125rem]  border-b-[0.125rem]  translate-y-[-45%] border-[orange]"></div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
