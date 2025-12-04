import Image from "next/image";
import type { FC } from "react";

interface Props {
  image: string;
  title: string;
  label?: string;
  href?: string;
  type: "banner" | "card";
}

const ItemCard: FC<Props> = ({ image, title, label, type, href }) => {
  return (
    <div className={`flex flex-col w-full rounded-lg cursor-pointer`}>
      <div className={`${type === "banner" ? "w-full" : "w-40"} h-40 relative`}>
        <div className="flex flex-col p-4 absolute z-5 bottom-0 pointer-events-none">
          <h2 className="w-40 text-nowrap overflow-hidden text-ellipsis text-[11px] text-white/50">
            {label}
          </h2>
          <h1 className="w-40 text-nowrap overflow-hidden text-ellipsis text-[16px] font-semibold">
            {title}
          </h1>
        </div>
        <div className="w-full h-full relative pointer-events-none z-3 bg-[linear-gradient(180deg,transparent,#000000bf)]" />
        <Image
          src={image}
          alt="cover"
          fill
          className="object-cover relative z-2 rounded-lg transition-all duration-200 ease-in-out hover:brightness-50"
        />
      </div>
    </div>
  );
};

export default ItemCard;
