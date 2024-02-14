import { SponseeForm } from "../SponseeForm";
export default function sponserships() {
  return (
    <div className="ml-[16rem] pt-[3.5rem] flex  ">
      <div className="flex flex-col gap-5">
        {/* HEADING */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Sponsorships</h2>
          <p className="text-custom-gray font-medium text-lg">
            View and edit your sponsership settings
          </p>
        </div>
        {/* ********* */}

        {/* RECENT SPONSERS */}
        <div className=" bg-custom-white rounded-xl h-[22rem] flex flex-col w-[75vw] ">
          <div>
            <h2 className="text-xl font-medium p-5">Recent Sponsers</h2>
          </div>
          <div className="w-full h-full mb-11 justify-center items-center flex">
            <p className="text-custom-gray text-xl">None so far</p>
          </div>
        </div>
        {/* ********** */}

        {/* SPONSEE LIST */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="text-xl bg-">Sponsees</h2>
          <button className="bg-custom-orange p-3 rounded-md text-white hover:bg-orange-400">
            Add a Sponsee
          </button>
        </div>
        {/* ********** */}

        <SponseeForm></SponseeForm>
      </div>
    </div>
  );
}
