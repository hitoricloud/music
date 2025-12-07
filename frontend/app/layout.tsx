//types
import type { Metadata } from "next";

//fonts
import { Inter } from "next/font/google";

//components
import Header from "./components/header";
import Playback from "./components/playback/playback";
import Sidebar from "./components/sidebar/sidebar";

//stylesheet
import "./globals.css";

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
        <div className="flex flex-col fixed z-6 w-full h-full pointer-events-none">
          <Header />

          <div className="flex flex-row grow w-max min-h-0">
            <Sidebar />
          </div>

          <Playback />
        </div>

        <div className="py-20 px-25">{children}</div>
      </body>
    </html>
  );
}
