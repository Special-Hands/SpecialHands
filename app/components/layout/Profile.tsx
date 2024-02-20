import { sideBarItems } from "../sideBarItems";

interface ProfileProps {
  logout: Function;
}
function Profile({ logout }: ProfileProps) {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return (
    <div className="px-[3rem] mx-auto ">
      <div className="flex gap-3 pb-8 pt-10 mid:pt-8 items-center ">
        {sideBarItems[0][1]}
        <h2 className="text-xl p-1">{sideBarItems[0][0]}</h2>
      </div>
      <h1 className=" font-normal text-[2rem]">Profile</h1>
      <h1 className=" text-[1.3rem] font-thin text-[gray] ">
        Manage your profile
      </h1>
      <div>
        <div className="pt-10">
          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 border-b-[0.1rem] font-normal">
            Account
          </h1>
          <div className="flex pt-5 items-center gap-5 pl-5  mid:pl-0">
            <div className="w-[4rem] h-[4rem] rounded-[100%] text-[2.6rem] text-white text-center bg-[orange]">
              B
            </div>
            <div>
              <h1 className=" text-[1.3rem] w-[70vw]  pb-2 -[0.1rem] font-normal">
                Bryan Ramos
              </h1>
            </div>
          </div>

          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 pt-[3rem]  border-b-[0.1rem] font-normal">
            Username
          </h1>
          <div>
            <h1 className="  pt-6 pl-5 mid:pl-0 text-[1.3rem] w-[70vw]  pb-2 -[0.1rem] font-normal">
              {user.name}
            </h1>
          </div>
          <h1 className=" text-[1.5rem] w-[70vw]  pb-2 pt-[3rem]  border-b-[0.1rem] font-normal">
            Email Address
          </h1>
          <div className="flex gap-5">
            <h1 className="  pt-6 pl-5 text-[1.3rem]  mid:pl-0    pb-2  font-normal">
              {user.email}
            </h1>
            <h1 className=" small:hidden  mt-7 h-[1.7rem] px-2 rounded text-[1.1rem] bg-[#ffc456] text-orange-700   font-normal">
              Primary
            </h1>
          </div>
          <div>
            <div
              onClick={() => logout()}
              className=" rounded-[0.3rem]  mid:ml-0  mt-8 scale-[1.2] font-medium w-[7rem] ml-7  transition-all duration-300 translate-x-0   text-[1rem] text-white border-2  px-5 py-1  cursor-pointer border-[orange] hover:text-[orange]  bg-[orange]   hover:bg-[white] "
            >
              LOG-OUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
