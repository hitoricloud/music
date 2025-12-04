import type { FC } from "react";
import { ReactNode } from "react";
import { IconProps } from "../../types";

export interface NavigationLinkProps {
  Icon: FC<IconProps>;
  title: string;
  href: string;
  isExpanded: boolean;
  className?: string;
  children?: ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  Icon,
  title,
  href,
  className,
  isExpanded,
  children,
}) => {
  const showDefaultTitle = title && !children;

  return (
    <a
      href={href}
      className={`
        ${className || ""}
        flex items-center h-9 gap-2 rounded-md
        px-1 py-2
        opacity-75 hover:opacity-100 transition-opacity duration-200
        text-white bg-transparent hover:bg-white/10
        
        ${isExpanded ? "w-full" : ""}
      `}
    >
      <Icon />

      {children ? (
        children
      ) : (
        <span
          className={`
            whitespace-nowrap
            text-[13px] font-medium leading-none
            ${isExpanded ? "opacity-100" : "opacity-0 hidden"}
          `}
        >
          {title}
        </span>
      )}
    </a>
  );
};

export default NavigationLink;
