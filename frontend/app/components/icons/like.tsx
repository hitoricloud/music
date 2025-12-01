import type { FC } from "react";
import type { IconProps } from "../../types";

const LikeIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
      <path
        opacity="0.75"
        d="M11.9473 1.75C13.771 1.75 15.25 3.2289 15.25 5.05273V5.24219C15.25 6.16828 14.8822 7.05695 14.2275 7.71191L8 13.9385L1.77344 7.71191C1.11844 7.05692 0.75 6.1685 0.75 5.24219V5.05273C0.75 3.22891 2.22891 1.75 4.05273 1.75C5.05572 1.75012 6.00425 2.2061 6.63086 2.98926L7.41406 3.96875L8 4.7002L8.58594 3.96875L9.36914 2.98926C9.99574 2.20611 10.9442 1.75013 11.9473 1.75Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LikeIcon;
