import type { FC } from "react";
import type { IconProps } from "../../types";

const RightArrowIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M6.25 17.5L13.2197 10.5303C13.5126 10.2374 13.5126 9.76256 13.2197 9.46967L6.25 2.5"
        stroke="white"
        stroke-width="2.25"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default RightArrowIcon;
