"use client";

import type { FC } from "react";
import { useState } from "react";
import NavigationLink from "./navigation/navigation-link";
import NavigationMusicItem from "./navigation/music-item";
import HomeIcon from "./icons/home";

const Navigation: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
        ${isExpanded ? "w-[200px]" : "w-[75px]"}
        flex flex-col items-start z-6 will-change-transform
        h-full mt-[52px] fixed border-r border-white/20 shrink-0
        transition-[width] duration-300 ease-in-out
        bg-(--background)/70 backdrop-blur-xl p-4 overflow-y-auto overflow-x-hidden
      `}
    >
      <div className={`border-b border-white/20 py-4 min-w-20 w-full`}>
        <NavigationLink title="Home" href="/" Icon={HomeIcon} isExpanded={isExpanded} />
      </div>

      <div className="flex flex-col w-full items-center gap-4 py-4">
        <NavigationMusicItem
          title="Die Lit"
          description="Playboi Carti"
          href="/"
          image="https://images.genius.com/a6edc3b66b348994bc5217b05909951d.300x300x1.png"
          isExpanded={isExpanded}
          type="album"
        />
      </div>
    </aside>
  );
};

export default Navigation;
