import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import LetterHead from "@/app/components/LetterHead";
import Footer from "@/app/components/Footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LetterHead />
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
