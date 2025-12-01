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
    <div
      className={`flex flex-col p-4 w-full rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-white/20`}
    >
      {type === "banner" ? (
        <div
          className="w-full h-40 rounded-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <Image
          className="w-full aspect-square rounded-lg"
          alt="cover"
          src={image}
          width={256}
          height={160}
        />
      )}

      <div className="flex flex-col py-3">
        <h2 className="w-40 text-nowrap overflow-hidden text-ellipsis text-[11px] text-white/50">
          {label}
        </h2>
        <h1 className="w-40 text-nowrap overflow-hidden text-ellipsis text-[16px] font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ItemCard;
