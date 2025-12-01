import type { FC } from "react";
import type { IconProps } from "../../types";

const ExpandIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
      <rect
        opacity="0.5"
        x="4.84375"
        y="4.84375"
        width="10.3125"
        height="10.3125"
        rx="3.15625"
        stroke="white"
        strokeWidth="1.6875"
      />
    </svg>
  );
};

export default ExpandIcon;
