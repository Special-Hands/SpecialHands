"use client";
import { useEffect, useState } from "react";
import { EmptySponsee } from "./EmptySponsees";
import Image from "next/image";
import { SponseeForm } from "./SponseeForm";
import { InfoModal } from "./InfoModal";
import { sponsee } from "@prisma/client";
import { AddSponsee } from "./AddSponsee";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
export default function SponseeCards() {
  const [sponsees, setSponsees] = useState<sponsee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [selectedSponsee, setSelectedSponsee] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAdd = () => {
    setActive(!active);
  };
  useEffect(() => {
    Aos.init();
    const fetchSponsees = async () => {
      try {
        const res = await fetch("/api/sponsee");
        if (!res.ok) {
          throw new Error("unable to fetch sponsees");
        }
        const data = await res.json();
        setSponsees(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSponsees();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <ClipLoader
            color={"#FCA504"}
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <div>
            <SponseeForm active={active} setActive={setActive}></SponseeForm>
            </div>
           
            

          {!sponsees.length && <EmptySponsee />}

          {!!sponsees.length && !active && (
            <div data-aos="zoom-in">
              <ul className="flex  gap-10 ">
                <div onClick={handleAdd}> 
                  <AddSponsee></AddSponsee>
                </div>
                {sponsees.map((sponsee, i) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedSponsee(sponsee.name);
                        setShowModal(true);
                      }}
                      className="flex flex-col items-center gap-2 transition duration-[400ms] cursor-pointer hover:scale-105">
                      <li
                        className="bg-white  shadow-lg  w-[10rem] h-[14rem] items-center p-2  flex flex-col "
                        key={i + Math.random() * 999999}>
                        <Image
                          className="rounded-sm"
                          src={sponsee.url}
                          layout="responsive"
                          width={150}
                          height={150}
                          alt={`${sponsee.name} card`}></Image>
                        <p className="text-center  text-sm">{sponsee.name}</p>
                      </li>
                      {/* <button className="text-white bg-custom-orange text-sm p-2  rounded-md">
                        Edit Sponsee
                      </button> */}
                    </div>
                  );
                })}
                  {showModal && (
              <div>
              <InfoModal sponsees={sponsees} name={selectedSponsee} active={showModal} setActive={setShowModal}></InfoModal>
            </div>
            )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
