import React from "react";
import Image from "next/image";

export interface Service {
  title: string;
  bg: string;
  icon: string;
  body: string;
}
type services = Array<Service>
interface ServiceProps {
  services: services;
}
function ServicesSection({ services }: ServiceProps) {
  return (
    <section id="services" className="pt-[5rem] pb-[13rem] m-auto">
      <div className="text-center">
        <div className="flex justify-center gap-2">
          <h3 className=" text-[orange]  text-[1.25rem]">Service </h3>
          <div className="w-[3.125rem] border-b-[0.125rem]  translate-y-[-45%] border-[orange]"></div>
        </div>
        <h1 className="">OUR WORK</h1>
        <h1 className="text-[1.5rem] font-medium m-auto w-[80%]">
          We partner with local organizations in places like the Dominican
          Republic to aid children and families in need. Together, we empower
          underserved communities.
        </h1>
      </div>
      <div className=" pt-10 flex flex-wrap justify-between w-[100%]  pl-[7%] pr-[7%] m-auto gap-10">
        {services.map((item) => {
          return (
            <div
              key={item.title}
              className="relative w-[21.875rem] cursor-pointer  flex-shrink-0 overflow-hidden text-black m-auto xsmall:w-[18.75rem]"
            >
              <div className="overflow-x-hidden">
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
  );
}

export default ServicesSection;
