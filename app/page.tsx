
import Image from "next/image";

const provideInfo = [
   {
    title: 'Education',
    bg: 'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '/graduation-hat (1).png' ,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ',

  },
  {
    title: 'Food',
    bg: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '/restaurant.png',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ',
  },

  {
    title: 'Social Service',
    bg: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '/customer.png',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  '
  }
]
  
export default function Home() {

  return (
    <div >
      <div id='land' className=' flex relative'>
      <div className='absolute h-[100%] w-[100%] bg-black opacity-[80%]'>
      </div>
      <div className="absolute w-[60%]  pl-[7%] pt-[10%] text-white">
        <h1 >Together, let's reach out for change <span className="text-[#ffa500]">one hand at a time</span></h1>
        <p>Your support matters more than ever.</p>
        <button  className=' hover:orangeShadow w-[190px] mt-[20px] h-[55px] border-[3px] border-[orange]   bg-[orange]  hover:bg-[white] hover:border-[3px] hover:text-[orange] hover:border-[orange] transition-all duration-[0.5s] ease-in-out'>Donate Now</button>
      </div>
      <div className='w-full  overflow-hidden'>
        <img  className="overflow-hidden animate1 h-[80vh] object-cover" width='100%' src='/specialArtboard 1.svg'></img>
      </div>
      </div>
      <div className='pt-[50px] m-auto h-[100vh]'  >
        <div className='text-center'>
        <div className='flex justify-center gap-2'>
          <h3 className=' text-[orange]  text-[20px]'>Service </h3>
          <div className='w-[50px] border-b-[2px]  translate-y-[-45%] border-[orange]'></div>
        </div>
          <h1 className=' '>We Provide</h1>
          </div>
          <div className=" pt-10 flex flex-wrap justify-between w-[100%]  pl-[7%] pr-[7%] m-auto gap-10">
        {
          provideInfo.map((item) => {
            return (
              <div className="   relative w-[350px] cursor-pointer  flex-shrink-0 overflow-hidden text-black m-auto orangeShadow">
                <div className="overflow-hidden">
                <img className='transition-all duration-[0.4s] hover:scale-[1.05] ' width='100%' height='100%'   src={item.bg}></img>
                </div>
                <div className=" mt-[20px] ">
                  {/* <img width='120px'  className="m-auto "  src={item.icon}></img> */}
                  <div className='w-[90%] m-auto'>
                    <div>
                    <h2 className='text-[30px] font-bold'>{item.title.toUpperCase()}<span className=" pl-3 opacity-100 text-[orange] group-hover:opacity-0">&rarr;</span></h2>
                    </div>
                    
                    <p className='text-[15px] '>{item.body}</p>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  );
}
