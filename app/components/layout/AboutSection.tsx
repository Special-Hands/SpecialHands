import React from 'react'
import Image from 'next/image'
function AboutSection() {
  return (
    <section id="about" className=" h-[full] bot    bg-[orange] rip ">
          <div className="flex larg:flex-col    justify-around">
            <Image
              className="  realtive translate-y-[-14rem] larg:translate-y-[-10rem] larg:m-auto mt-[5rem] medsm:w-[85%] "
              alt="Karina giving out supplies to people in need"
              width="550"
              height="550"
              src="aboutpic.svg"
            ></Image>
            <div className=" pt-10 translate-y-[-2rem] pb-[15rem] med:pb-[0rem] larg:translate-y-[-9rem] larg:w-[80%] larg:m-auto   text-white w-[35%]">
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
  )
}

export default AboutSection