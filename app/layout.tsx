

import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";


const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: "Syed Portfolio",
  description: "Syed Portfolio with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-Scrollbar">
      <body className={font.className}>
        <div>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            outerAlpha={0}
            innerScale={2}
            outerScale={2}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
