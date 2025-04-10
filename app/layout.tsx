import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../ui/Menu"
import Header from "../ui/Header"


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Booker",
  description: "Book your meets easely!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <div className="flex h-screen">
          <div className="w-[300px] h-full p-4 bg-dark">
            <Menu />
          </div>
          <div className="w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
