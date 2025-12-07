import type { FC } from "react";
import type { IconProps } from "../../types";

const SoundIcon: FC<IconProps> = ({ width = 10, height = 15, className, ...props }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.75"
        d="M8.6502 14.9112C5.92011 13.6556 0 10.5779 0 7.50018C0 4.42249 5.92011 1.3448 8.6502 0.089138C9.29294 -0.206481 10 0.269752 10 0.977216L10 14.0232C10 14.7306 9.29294 15.2068 8.6502 14.9112Z"
        fill="white"
      />
    </svg>
  );
};

export default SoundIcon;
