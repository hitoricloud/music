import type { FC } from "react";
import type { IconProps } from "../../types";

const BackIcon: FC<IconProps> = ({ width = 16, height = 16, className, ...props }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.75" clipPath="url(#clip0_4_26)">
        <rect width="4" height="16" rx="2" fill="white" />
        <path
          d="M14.4453 1.03647L5.24808 7.16795C4.65434 7.56377 4.65434 8.43623 5.24807 8.83205L14.4453 14.9635C15.1099 15.4066 16 14.9302 16 14.1315V1.86852C16 1.06982 15.1099 0.59343 14.4453 1.03647Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_26">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
