import type { FC } from "react";
import { useState } from "react";
import NavigationMusicItem from "./navigation/MusicItem";
import NavigationLink from "./navigation/Link";
import HomeIcon from "./icons/home";

const Navigation: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
        ${isExpanded ? "w-[206.2px]" : "w-[72.2px]"}
        h-[635px] border-r border-white/20 flex-shrink-0
        transition-[width] duration-300 ease-in-out
        bg-black p-5 overflow-y-auto overflow-x-hidden
      `}
    >
      <div className="mb-5 border-b border-white/20 pb-5">
        <div className="flex flex-col gap-1">
          <NavigationLink title="Home" href="/" Icon={HomeIcon} isExpanded={isExpanded} />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col gap-1">
          <NavigationMusicItem
            title="JRJRJR"
            description="Album by Jane Remover"
            href="/"
            Icon={HomeIcon}
            isExpanded={isExpanded}
            type="album"
          />
          <NavigationMusicItem
            title="JRJRJR"
            description="Song by Travis Scott"
            href="/"
            Icon={HomeIcon}
            isExpanded={isExpanded}
            type="song"
          />
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
