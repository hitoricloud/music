"use client";

import type { NextPage } from "next";
import { usePathname } from "next/navigation";

const PlaylistPage: NextPage = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1 className="p-6 flex items-center justify-center text-xl">
        Playlist page <br /> {pathname}
      </h1>
    </div>
  );
};

export default PlaylistPage;
