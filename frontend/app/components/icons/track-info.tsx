import type { FC } from "react";
import type { IconProps } from "../../types";

const TrackInfoIcon: FC<IconProps> = ({ width = 14, height = 16, className, ...props }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="1" y="1" width="12" height="14" rx="1" stroke="#8FCFEF" stroke-width="2" />
      <path d="M5 11V5L10 8L5 11Z" fill="#8FCFEF" />
    </svg>
  );
};

export default TrackInfoIcon;
