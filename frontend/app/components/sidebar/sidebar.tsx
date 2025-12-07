"use client";

import type { FC } from "react";
import { useState } from "react";
import HomeIcon from "../icons/home";
import { observer } from "mobx-react-lite";
import { userStore } from "../../store/user-store";
import SidebarItem from "./sidebar-item";

const Sidebar: FC = observer(() => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
        ${isExpanded ? "w-[200px]" : "w-[75px]"}
        flex flex-col items-start z-6 will-change-transform
        h-full border-t border-r border-white/20 shrink-0
        select-none transition-[width] duration-300 ease-in-out
        bg-(--background)/70 backdrop-blur-xl overflow-y-auto overflow-x-hidden pointer-events-auto
      `}
    >
      <div className={`border-b border-white/20 p-4 w-full`}>
        <SidebarItem href="/" isMinimised={isExpanded} title="Home">
          <HomeIcon className="min-w-5 min-h-5" />
        </SidebarItem>
      </div>

      <div className="flex flex-col w-full items-center gap-4 p-2">
        {/* Mock Data*/}
        {userStore.playlists.map(({ title, cover, description, pathname }, idx) => (
          <SidebarItem
            key={idx}
            title={title}
            cover={cover}
            href={pathname}
            isMinimised={isExpanded}
            description={description}
          />
        ))}
      </div>
    </aside>
  );
});

export default Sidebar;
