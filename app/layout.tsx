import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import LetterHead from "@/app/components/ui/LetterHead";
import Footer from "@/app/components/layout/Footer";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const loadUserInfo = async () => {
  "use server";
  const supabase = createClientComponentClient();
  const res = await supabase.auth.getSession();
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <LetterHead /> */}

        {children}
      </body>
    </html>
  );
}
