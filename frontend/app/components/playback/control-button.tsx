//types
import type { FC } from "react";

//icons
import ShuffleIcon from "../icons/shuffle";
import BackIcon from "../icons/back";
import NextIcon from "../icons/next";
import RepeatIcon from "../icons/repeat";
import PauseIcon from "../icons/pause";
import TrackInfoIcon from "../icons/track-info";
import SoundIcon from "../icons/sound";

interface Props {
  type: "back" | "next" | "play" | "shuffle" | "repeat" | "trackInfo" | "sound";
  onClick: () => void;
}

const ControlButton: FC<Props> = ({ type, onClick }) => {
  const iconMap = {
    shuffle: <ShuffleIcon />,
    back: <BackIcon />,
    next: <NextIcon />,
    repeat: <RepeatIcon />,
    play: <PauseIcon />,
    trackInfo: <TrackInfoIcon />,
    sound: <SoundIcon />,
  };

  return (
    <button
      className="flex items-center justify-center cursor-pointer transition-scale duration-150 ease-in-out hover:scale-110"
      onClick={onClick}
    >
      {iconMap[type]}
    </button>
  );
};

export default ControlButton;
