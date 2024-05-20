import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
      <body className={inter.className + " relative"}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <div className="bg-white dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.5] w-screen min-h-screen">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <Navigation />
              <div className="w-full min-h-screen relative z-20">
                {children}{" "}
              </div>
            </div>
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
