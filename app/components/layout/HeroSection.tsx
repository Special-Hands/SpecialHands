
import Image from "next/image"
function HeroSection() {
  return (
    <section id="hero" className="  flex h-[100vh]  relative">
          <div className="absolute h-[100%] w-[100%]   bg-black opacity-[85%]"></div>
          <div className="w-full   overflow-hidden">
            <Image
              className=" h-full w-full object-cover "
              width="100"
              height="100"
              quality={100}
              alt="kids"
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
  )
}

export default HeroSection