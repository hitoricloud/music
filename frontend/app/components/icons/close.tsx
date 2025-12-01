import type { FC } from "react";
import type { IconProps } from "../../types";

const CloseIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
        d="M5.29358 15.6314C4.96916 15.9558 4.44222 15.9558 4.1178 15.6314C3.79338 15.307 3.79338 14.7801 4.1178 14.4557L8.69983 9.8746L4.1178 5.29354C3.79338 4.96912 3.79338 4.44218 4.1178 4.11776C4.44222 3.79335 4.96916 3.79334 5.29358 4.11776L9.87561 8.69979L14.4567 4.11776C14.7811 3.79381 15.3072 3.7935 15.6315 4.11776C15.9557 4.44202 15.9554 4.96811 15.6315 5.29256L11.0494 9.8746L15.6315 14.4566C15.9554 14.7811 15.9557 15.3072 15.6315 15.6314C15.3072 15.9557 14.7811 15.9554 14.4567 15.6314L9.87561 11.0504L5.29358 15.6314Z"
        fill="white"
      />
    </svg>
  );
};

export default CloseIcon;
