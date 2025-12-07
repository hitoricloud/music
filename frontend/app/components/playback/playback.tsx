"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";
import LikeIcon from "../icons/like";
import { playerStore } from "../../store/player-store";
import Skeleton from "../skeleton";
import { userStore } from "../../store/user-store";
import ShuffleIcon from "../icons/shuffle";
import BackIcon from "../icons/back";
import PauseIcon from "../icons/pause";
import NextIcon from "../icons/next";
import RepeatIcon from "../icons/repeat";
import ControlButton from "./control-button";

const Playback = observer(() => {
  const track = playerStore.currentTrack;

  return (
    <div className="w-full p-4 bg-(--background)/70 backdrop-blur-xl border-t border-white/15 flex items-center justify-between pointer-events-auto">
      <div className="flex items-center gap-4">
        {track?.cover ? (
          <Image
            className="w-[52px] h-[52px] rounded-xs object-cover"
            alt="track-cover"
            src={track.cover}
            width={52}
            height={52}
          />
        ) : (
          <Skeleton className="w-[52px] h-[52px] rounded-xs" />
        )}

        <div className="flex flex-col">
          <h1 className="text-[12px] font-medium">{track?.title}</h1>
          <p className="text-[12px] text-white/50">{track?.artist}</p>
        </div>

        <button
          onClick={() => {
            track && userStore.addToFavorite(track);
          }}
          className="w-4 h-4 opacity-70 hover:opacity-100 transition"
        >
          <LikeIcon />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <ControlButton onClick={() => null} type="shuffle" />

          <ControlButton onClick={() => null} type="back" />

          <ControlButton onClick={() => null} type="play" />

          <ControlButton onClick={() => null} type="next" />

          <ControlButton onClick={() => null} type="repeat" />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[10px] font-medium text-white/25">0:00</p>
          <div className="w-[340px] h-[3px] bg-white/25 rounded-[99px]" />
          <p className="text-[10px] font-medium text-white/25">0:00</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ControlButton onClick={() => null} type="trackInfo" />

        <div className="flex items-center gap-2">
          <ControlButton onClick={() => null} type="sound" />
          <div className="w-20 h-[3px] rounded-[99px] bg-white/15" />
        </div>
      </div>
    </div>
  );
});

export default Playback;
