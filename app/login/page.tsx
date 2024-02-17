"use client";
import NavBar from "../components/layout/NavBar";
import LogIn from "../components/layout/LogIn";


export interface authParams {
  name?: string;
  email: string;
  password: string;
  options?: object;
}

export default function LogInPage() {
  return (
    <div className="  bg-gray-100  h-screen w-screen">
      {/* <div className="w-[10rem] pt-5"> 
      <img  className='m-auto' width='110' src='/Logo.svg'></img>
      </div> */}
      
      <div className=" items-center pt-[10%] flex justify-center">
        <div className="  scale-[1.1] ">
          <LogIn />
        </div>
      </div>
    </div>
  );
}
