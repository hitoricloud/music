import Image from "next/image";
import type { FC, ReactNode } from "react";
import Skeleton from "../skeleton";
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  isMinimised: boolean;
  cover?: string;
  href: string;
  children?: ReactNode;
}

const SidebarItem: FC<Props> = ({ title, description, cover, children, href, isMinimised }) => {
  return (
    <Link
      href={href}
      prefetch
      className={`flex items-center p-2 w-full gap-2 rounded-sm hover:bg-[#363636]`}
    >
      {cover ? (
        <Image alt="cover" className="w-10 h-10 rounded-xs" src={cover} width={40} height={40} />
      ) : children ? (
        <>{children}</>
      ) : (
        <Skeleton className="w-10 h-10 rounded-xs" />
      )}

      <div
        className={`
			flex flex-col overflow-hidden transition-all duration-200
			${isMinimised ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
		`}
      >
        <h1 className="text-[13px] font-medium text-white text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h1>
        <p className="text-[11px] text-white/50 whitespace-nowrap">{description}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
