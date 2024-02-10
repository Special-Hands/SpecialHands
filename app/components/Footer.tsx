import Image from "next/image";

export default function Footer() {
  return (
    <div className=" mt-20 bg-[#FFA500] text-white">
      <footer>
        <div className=" flex justify-center  flex-wrap gap-5 1000:justify-between ">
          <div className="pl-5 pt-5">
            <form className="flex flex-col">
              <h2>Join Our News Letter</h2>
              <label className="flex gap-5 items-center">
                <input
                  className="text-center p-1"
                  type="text"
                  placeholder="Enter your email adress"
                />
                <button>Subscribe</button>
              </label>
            </form>
          </div>
          <div className="flex p-5 gap-1  800:gap-10 ">
            <div className="">
              <h3 className="font-semi-bold text-lg ">CONTACT</h3>
              <div className="text-sm">
                <p className="text-black">347-501-0132</p>
                <p className="text-black">specialhands@gmail.com</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semi-bold text-lg">FOLLOW US</h3>
              <div className="text-sm sm:text-md">
                <p className=" text-black">Instagram</p>
              <p className="text-black">Youtube</p>
              </div>
              
            </div>

            <div className="text-center">
              <h3 className="font-semi-bold text-lg">LEGAL</h3>
              <div className="text-sm sm:text-md">
              <p className="text-black">Privacy Policy</p>
                <p className="text-black">Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-between p-5 border-t">
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
                alt="twitter-logo"
                width={20}
                height={20}></Image>
            </a>
            <a>
              <Image
                src="/facebook.svg"
                alt="twitter-logo"
                width={20}
                height={20}></Image>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
