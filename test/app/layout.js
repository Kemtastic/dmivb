import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DMIVb",
  description: "Your Media Base",
  image: "/logo.png",
  url: "https://dmivb.com",
  type: "website",
  siteName: "DMIVb",
  twitterUsername: "@dmivb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <footer className=""> &copy; {new Date().getFullYear()} DMIVb</footer>
      </body>
    </html>
  );
}
