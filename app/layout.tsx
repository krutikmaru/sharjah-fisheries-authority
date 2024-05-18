import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Government of Sharjah",
  description: "Sharjah Fish Resources Authority",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className + " overflow-x-hidden"}>
        <NextUIProvider>
          <Navigation />
          <div className="bg-AEBlack-100 w-screen min-h-screen">{children}</div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
