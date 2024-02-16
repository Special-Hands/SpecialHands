import Image from "next/image";

export default function Footer() {
  return (
    <div className=" mt-20 bg-[#FFA500] text-white">
      <footer className="w-[90%] m-auto">
        <div className="  flex justify-around  flex-wrap gap-5 ">
          <Image src='/Logo-white.svg' className=" pt- 550:pt-8 550:scale-[1.5] scale-[1.3]  " alt='white logo' width='120' height='120'></Image>
          <div className=" pt-5">
            <form className="flex flex-col">
              <h2>Join Our Newsletter</h2>
              <label className="flex flex-wrap gap-5 items-center">
                <input
                  className="text-center w-[15rem] p-1"
                  type="text"
                  placeholder="ENTER EMAIL ADDRESS"
                />
                <button>Subscribe</button>
              </label>
            </form>
          </div>
          <div className="flex pt-5 550:flex-col  p-2 gap-5  800:gap-10 ">
            <div className="550:text-center">
              <h3 className="font-bold 550:text-2xl text-lg ">CONTACT</h3>
              <div className="text-lg  550:text-2xl">
                <p>347-501-0132</p>
                <p>specialhands@gmail.com</p>
              </div>
            </div>

            <div className=" 550:text-center ">
              <h3 className="font-bold 550:text-2xl text-lg">FOLLOW US</h3>
              <div className="text-lg  550:text-2xl sm:text-md">
                <p className=" ">Instagram</p>
              <p className="">Youtube</p>
              </div>
              
            </div>

            <div className="text-center 550:text-center">
              <h3 className="font-bold   550:text-2xl text-lg">LEGAL</h3>
              <div className="text-lg  550:text-2xl :text-md">
              <p className="">Privacy Policy</p>
                <p className="">Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-0 justify-between p-5 ">
          <p>©{new Date().getFullYear()} Special Hands</p>
          <div className="flex gap-5">
            <a className="">
              <Image
                src="/twitter.svg"
                alt="twitter-logo"
                width={20}
                height={20}></Image>
            </a>
            <a>
              <Image
                src="/youtube.svg"
                alt="youtube-logo"
                width={20}
                height={20}></Image>
            </a>
            <a>
              <Image
                className="translate-y-[-0.17rem]"
                src="/facebook.svg"
                alt="facebook-logo"
                width={10}
                height={10}></Image>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
