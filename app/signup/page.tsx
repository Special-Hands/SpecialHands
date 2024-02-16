import NavBar from "../components/layout/NavBar";
import SignUp from "../components/layout/SignUp";
export default function SignUpPage() {
  return (
    <div className="  bg-gray-100  h-screen w-screen">
      {/* <div className="w-[10rem] pt-5"> 
      <img  className='m-auto' width='110' src='/Logo.svg'></img>
      </div> */}
      <NavBar transparent={false} />
      <div className=" items-center pt-[13%] flex justify-center">
        <div className="  scale-[1.2] ">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
