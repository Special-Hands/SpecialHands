import Image from "next/image";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Actions from "./components/ui/Actions";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import HeroSection from "./components/layout/HeroSection";
import ServicesSection from "./components/layout/ServicesSec";
import AboutSection from "./components/layout/AboutSection";
import ActionSection from "./components/layout/ActionSection";

const provideInfo = [
  {
    title: "Education",
    bg: "/books.avif",
    icon: "/graduation-hat (1).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },
  {
    title: "Food",
    bg: "/food.avif",
    icon: "/restaurant.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ",
  },

  {
    title: "Social Service",
    bg: "/hands-together.avif",
    icon: "/customer.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ",
  },
];

const action = [
  {
    title: "Donate",
    icon: "/heart (2).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 0,
  },
  {
    title: "Sponsor",
    icon: "/support (3).png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 1,
  },
  {
    title: "Share",
    icon: "/campaign.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    index: 2,
  },
];

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
        <HeroSection/>
        <ServicesSection services={provideInfo} />
        <AboutSection />
        <ActionSection choices={action} />
      <Footer></Footer>
    </div>
  );
}
