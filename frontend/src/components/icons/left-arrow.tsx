import type { FC } from "react";
import type { IconProps } from "../../types";

const LeftArrowIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
        d="M13.75 2.5L6.78033 9.46967C6.48744 9.76256 6.48744 10.2374 6.78033 10.5303L13.75 17.5"
        stroke="white"
        stroke-width="2.25"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default LeftArrowIcon;
