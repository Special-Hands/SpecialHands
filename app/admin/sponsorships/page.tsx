import SponseeCards from "./SponseeCards";
import { SponseeForm } from "./SponseeForm";
import { EmptySponsee } from "./emptySponsees";
export default function sponserships() {
  return (
    <div className="ml-[16rem] pt-[3.5rem] h-screen ">
      <div className="flex flex-col gap-5">
        {/* HEADING */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Sponsorships</h2>
          <p className="text-custom-gray font-medium text-lg">
            View and edit your sponsership settings
          </p>
        </div>

        <SponseeCards />
        {/* ********* */}

        {/* RECENT SPONSERS */}
        {/* <div className=" bg-custom-white rounded-xl h-[22rem] flex flex-col w-[75vw] ">
          <div>
            <h2 className="text-xl font-medium p-5">Recent Sponsers</h2>
          </div>
          <div className="w-full h-full mb-11 justify-center items-center flex">
            <p className="text-custom-gray text-xl">None so far</p>
          </div>
        </div> */}
        {/* ********** */}

        {/* SPONSEE LIST */}
        
        {/* ********** */}

       
      </div>
    </div>
  );
}
