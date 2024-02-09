import Image from "next/image";

export default function Footer() {
  return (
    <div className="">
      <footer className="">
        <div className="flex justify-end gap-10">
          <div className="">
            <h3 className="font-semi-bold">RESOURCES</h3>
          </div>

          <div>
            <h3 className="font-semi-bold">FOLLOW US</h3>
          </div>

          <div>
            <h3 className="font-semi-bold">LEGAL</h3>
          </div>

        </div>
        <div className="">
          <a>
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
        <p>©{new Date().getFullYear()} Special Hands</p>
      </footer>
    </div>
  );
}
