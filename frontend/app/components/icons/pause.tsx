import type { FC } from "react";
import type { IconProps } from "../../types";

const PauseIcon: FC<IconProps> = ({ width = 24, height = 24, className, ...props }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="6" y="4" width="4" height="16" rx="2" fill="white" />
      <rect x="14" y="4" width="4" height="16" rx="2" fill="white" />
    </svg>
  );
};

export default PauseIcon;
