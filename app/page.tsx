import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Actions from "./components/Actions";
const provideInfo = [
  {
    title: "Education",
    bg: "/books.avif",
    icon: "/graduation-hat (1).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },
  {
    title: "Food",
    bg: "/food.avif",
    icon: "/restaurant.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },

  {
    title: "Social Service",
    bg: "/hands-together.avif",
    icon: "/customer.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ",
  },
];

const action = [
  {
    title: "Donate",
    icon: "/heart (2).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 0,
  },
  {
    title: "Sponsor",
    icon: "/support (3).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 1,
  },
  {
    title: "Share",
    icon: "/campaign.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    index: 2,
  },
];

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar ></NavBar>
      </nav>
      <div className="transition-all duration-300">
        {/* -------------------------------------------------------------------------- */}
        {/* HERO SECTION  */}
        <section id="hero" className="  flex h-[100vh]  relative">
          <div className="absolute h-[100%] w-[100%]   bg-black opacity-[85%]"></div>
          <div className="w-full   overflow-hidden">
            <Image
              className=" h-full w-full object-cover "
              width="100"
              height='100'
              quality={100}
              alt='kids'
              src="/specialArtboard 1.png"
            ></Image>
            <div className="bg-transparent w-full height-full absolute inset-0 m-auto backdrop-blur-[0.25rem]"></div>
            <div className="absolute   w-[60%] m-auto  pl-[7%]   top-[30%] text-white  overflow-hidden   flex flex-col med:right-[4%]  med:leading-[2]  med:w-[90%] med:text-center med:top-[25%]   med:m-auto  med:pl-[0] medsm:w-[90%] medsm:top-[20%] small:w-[90%] small:   xsmall:scale-[0.9]  xsmall:top-[10%]">
              <h1 className="text-[3.4rem] small:text-[3rem]">
                Together, let's reach out for change{" "}
                <span className="text-[#ffa500] small:text-[3rem]">
                  one hand at a time
                </span>
              </h1>

              <p className=" text-[1.7rem] pt-5 pb-5 sm:text-[1.1rem]">
                Your support matters more than ever.
              </p>
              <button className="  hover:orangeShadow w-[11.875rem] mt-[1.25rem]  h-[3.4375rem] border-[0.1875rem] border-[orange]   bg-[orange]  hover:bg-[white] hover:border-[0.1875rem] hover:text-[rgb(255,165,0)] hover:border-[orange] transition-all duration-[0.3s] ease-in-out med:mt-[1.8rem] med:m-auto ">
                Donate Now
              </button>
            </div>
          </div>
        </section>
        {/* ------------------------------------------------------------------------- */}
        {/* SERVICES SECTION */}
        <section id="services" className="pt-[5rem] m-auto">
          <div className="text-center">
            <div className="flex justify-center gap-2">
              <h3 className=" text-[orange]  text-[1.25rem]">Service </h3>
              <div className="w-[3.125rem] border-b-[0.125rem]  translate-y-[-45%] border-[orange]"></div>
            </div>
            <h1 className="">OUR WORK</h1>
            <h1 className="text-[1.5rem] font-medium m-auto w-[80%]">
              We partner with local organizations in places like the Dominican
              Republic to aid children and families in need. Together, we
              empower underserved communities.
            </h1>
          </div>
          <div className=" pt-10 flex flex-wrap justify-between w-[100%]  pl-[7%] pr-[7%] m-auto gap-10">
            {provideInfo.map((item) => {
              return (
                <div
                  key={item.title}
                  className="relative w-[21.875rem] cursor-pointer  flex-shrink-0 overflow-hidden text-black m-auto xsmall:w-[18.75rem]"
                >
                  <div className="overflow-hidden">
                    <Image
                      className="transition-all duration-[0.4s] hover:scale-[1.05] "
                      width="350"
                      height="350"
                      alt={item.title}
                      src={item.bg}
                      quality={100}
                    ></Image>
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
        </section>
        {/* --------------------------------------------------------------------------------------------------- */}
        {/* ABOUT SECTION */}
        <section
          id="about"
          className=" h-[full]     bg-[orange] rip mt-[13rem]"
        >
          <div className="flex larg:flex-col    justify-around">
            <Image
              className="  realtive translate-y-[-14rem] larg:translate-y-[-10rem] larg:m-auto mt-[5rem] medsm:w-[85%] "
              alt="Karina giving out supplies to people in need"
              width="550"
              height="550"
              src="aboutpic.svg"
            ></Image>
            <div className=" pt-10 pb-[15rem] med:pb-[0rem] larg:translate-y-[-9rem] larg:w-[80%] larg:m-auto   text-white w-[35%]">
              <h1 className="lg:text-[2rem] translate-y-[4rem] med:translate-y-[-2rem]  larg:m-auto ">
                ABOUT US
              </h1>
              <p className="text-[2rem] pt-10 translate-y-[4rem] med:translate-y-[-4rem]  lg:text-[1.5rem] small:text-[1.8rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip{" "}
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------------------- */}
        {/* CALL TO ACTION */}
        <section id="action" className="mt-[5rem] text-center ">
          <div>
            <h1 className="text-[5rem]">WE NEED YOU</h1>
            <div className="w-[8rem] m-auto border-b-[2px] border-b-[orange]  "></div>
            <div className="flex justify-center gap-5">
              <p className="font-medium w-[70%] pt-5 text-[2rem] ">
                United, we can create meaningful change. The more hands we have
                on deck, the stronger our impact will be.
              </p>
            </div>
            <div className="flex mb-[10rem] mt-20  justify-center">
              <Actions items={action} />
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
