import SideBar from "../components/SideBar";
import "aos/dist/aos.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideBar/>
      {children}
    </div>
  );
}
