import type { FC } from "react";
import { IconProps } from "../../types";
import NavigationLink from "./navigation-link";
import Image from "next/image";

export type NavigationMusicItemType = "artist" | "song" | "playlist" | "album";

export interface NavigationMusicItemProps {
  image?: string;
  Icon?: FC<IconProps>;
  title: string;
  href: string;
  isExpanded: boolean;
  className?: string;
  description?: string;
  type: NavigationMusicItemType;
}

const NavigationMusicItem: FC<NavigationMusicItemProps> = ({
  image,
  Icon,
  title,
  href,
  isExpanded,
  className,
  description,
  type,
}) => {
  const MusicIconWrapper = () => (
    <div
      className={`
        shrink-0
        ${isExpanded ? "mr-3" : "mx-auto"}
      `}
    >
      {Icon && <Icon width={"40"} height={"40"} className="rounded-[1.68px]" />}
      {image && (
        <Image className="rounded-sm w-10 h-10" src={image} width={40} height={40} alt="cover" />
      )}
    </div>
  );

  const MusicContent = () => (
    <div
      className={`
        flex flex-col justify-center min-w-0 
        transition-opacity duration-300
        ${isExpanded ? "opacity-100" : "opacity-0 w-0 pointer-events-none"} 
      `}
    >
      <span
        className={`
          text-white
          text-[12px] font-medium leading-none **truncate** 
        `}
      >
        {title}
      </span>
      {description && (
        <span
          className={`
            text-white/50
            text-[11px] font-normal leading-none
          `}
        >
          {description}
        </span>
      )}
    </div>
  );

  return (
    <NavigationLink
      Icon={MusicIconWrapper}
      title={""}
      href={href}
      isExpanded={isExpanded}
      className={`
        ${className || ""}
        h-14 px-0 py-2 w-full
        text-white/80 hover:text-white hover:bg-[#363636]/50
        rounded-lg whitespace-nowrap overflow-hidden
        transition-colors duration-200
      `}
    >
      <MusicContent />
    </NavigationLink>
  );
};

export default NavigationMusicItem;
