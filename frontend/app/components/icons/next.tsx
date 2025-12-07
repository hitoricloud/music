import type { FC } from "react";
import type { IconProps } from "../../types";

const NextIcon: FC<IconProps> = ({ width = 16, height = 16, className, ...props }) => {
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
      <g opacity="0.75" clipPath="url(#clip0_4_37)">
        <rect x="12" width="4" height="16" rx="2" fill="white" />
        <path
          d="M1.5547 1.03647L10.7519 7.16795C11.3457 7.56377 11.3457 8.43623 10.7519 8.83205L1.5547 14.9635C0.890145 15.4066 0 14.9302 0 14.1315V1.86852C0 1.06982 0.890144 0.59343 1.5547 1.03647Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_37">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextIcon;
