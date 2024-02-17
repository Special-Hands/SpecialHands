import { sideBarItems } from "../sideBarItems";

interface ProfileProps {
  logout: Function;
}

function Profile({ logout }: ProfileProps) {
  return (
    <div className="p-[3rem] pt-[2rem]">
      <div className="flex gap-3 pb-8 pt-10 items-center ">
        {sideBarItems[0][1]}
        <h2 className="text-xl p-1">{sideBarItems[0][0]}</h2>
      </div>
      <h1 className=" font-normal">Profile</h1>
      <h1 className=" text-[1.5rem] font-thin text-[gray] ">
        Manage your profile
      </h1>
      <div>
        <div className="pt-10">
          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 border-b-[0.1rem] font-normal">
            Account
          </h1>
          <div className="flex pt-5 items-center gap-5 pl-5">
            <div className="w-[4rem] h-[4rem] rounded-[100%] text-[2.6rem] text-white text-center bg-[orange]">
              B
            </div>
            <h1 className=" text-[1.3rem] w-[70vw]  pb-2 -[0.1rem] font-normal">
              Bryan Ramos
            </h1>
          </div>
          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 pt-[3rem]  border-b-[0.1rem] font-normal">
            Username
          </h1>
          <div>
            <h1 className="  pt-6 pl-5 text-[1.3rem] w-[70vw]  pb-2 -[0.1rem] font-normal">
              Bryan Ramos
            </h1>
            <div className="font-medium w-[7rem] ml-5  transition-all duration-300 translate-x-0   text-[1rem] text-white border-2  px-5 py-1  cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] ">
              LOG-OUT
            </div>
          </div>
          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 pt-[3rem]  border-b-[0.1rem] font-normal">
            Email Address
          </h1>
          <div className="flex gap-5">
            <h1 className="  pt-6 pl-5 text-[1.3rem]   pb-2  font-normal">
              ramosbusiness544@gmail.com
            </h1>
            <h1 className="  mt-7 h-[1.7rem] px-2 rounded text-[1.1rem] bg-[#ffc456] text-orange-700   font-normal">
              Primary
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
