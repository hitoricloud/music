import type { FC } from "react";
import type { IconProps } from "../../types";

const CollapseIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
      <path opacity="0.5" d="M4 10H16" stroke="white" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
};

export default CollapseIcon;
