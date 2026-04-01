import type { Metadata } from "next";
import { Roboto , Poppins, Oswald, Nunito, Boldonse } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CARPLUS",
  description: "Next.js + Tailwind CSS + GSAP landing page",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${oswald.variable} ${nunito.variable} ${boldonse.variable} antialiased`}>
        <header className="relative">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
