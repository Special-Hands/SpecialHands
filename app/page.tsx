
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id='land' className=' flex relative'>
      <div className='absolute h-[100%] w-[100%] bg-black opacity-[50%]'>
      </div>
      <div className="absolute w-[60%] pl-[10%] pt-[10%] text-white">
        <h1 >Together, let's reach out for change, one hand at a time</h1>
        <p>Your support matters more than ever.</p>
      </div>
      <img src='/specialArtboard 1.svg'></img>
      </div>
    </div>
  );
}
