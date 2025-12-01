import type { FC } from "react";
import LikeIcon from "../icons/like";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  artist_names: string;
  header_image_thumbnail_url: string;
}

const addToFavorite = () => {};

const SongRow: FC<Props> = ({ id, title, artist_names, header_image_thumbnail_url }) => {
  return (
    <div className="flex items-center gap-4 rounded-sm px-4 transition-all duration-200 ease-in-out cursor-pointer hover:bg-white/20">
      <p className="w-3 text-white/50">{id}</p>
      <button
        className="flex items-center justify-center p-1 rounded-sm cursor-pointer"
        onClick={addToFavorite}
      >
        <LikeIcon
          width="16"
          height="16"
          className="transition-all duration-200 ease-in-out hover:fill-white"
        />
      </button>
      <Image
        alt="cover"
        src={header_image_thumbnail_url}
        width={32}
        height={32}
        className="rounded-[1.23px]"
      />
      <div className="flex flex-col">
        <h1>{title}</h1>
        <h2 className="text-white/50 max-w-[40vw] text-nowrap overflow-hidden text-ellipsis">
          {artist_names}
        </h2>
      </div>
    </div>
  );
};

export default SongRow;
