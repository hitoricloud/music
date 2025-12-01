import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/header";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitori Music",
  description: "",
};

declare global {
  interface Window {
    runtime: {
      WindowMinimise: () => void;
      WindowMaximise: () => void;
      WindowUnmaximise: () => void;
      WindowSetTitle: (title: string) => void;
      WindowIsMaximised: () => boolean;
      WindowToggleMaximise: () => void;
      Quit: () => void;
    };
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="flex flex-col"> */}
        <Header />
        {/* <div className="flex"> */}
        <Navigation />
        <div className="py-20 px-25">{children}</div>
        {/* </div>
        </div> */}
      </body>
    </html>
  );
}
