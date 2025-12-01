import type { FC } from "react";
import type { IconProps } from "../../types";

const HomeIcon: FC<IconProps> = ({ width = 20, height = 20, className, ...props }) => {
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
        d="M17.033 7.75009C17.3282 7.98735 17.5 8.3457 17.5 8.72448V16.2504C17.5 16.9407 16.9404 17.5004 16.25 17.5004H14.0625C13.3721 17.5004 12.8125 16.9407 12.8125 16.2504V13.1254C12.8125 12.435 12.2529 11.8754 11.5625 11.8754H9.375C8.68464 11.8754 8.125 12.435 8.125 13.1254V16.2504C8.125 16.9407 7.56536 17.5004 6.875 17.5004H3.75C3.05964 17.5004 2.5 16.9407 2.5 16.2504V8.77452C2.5 8.36756 2.69812 7.98606 3.03103 7.75199L9.73091 3.04113C10.1864 2.72086 10.7988 2.74049 11.2329 3.08928L17.033 7.75009Z"
        fill="white"
      />
    </svg>
  );
};

export default HomeIcon;
