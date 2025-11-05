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
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`flex flex-col justify-end p-4 rounded-lg cursor-pointer h-40 ${type === "banner" ? "w-[336px]" : "w-40"}`}
    >
      <h2 className="text-[11px] text-white/50">{label}</h2>
      <h1 className="text-[16px] font-semibold">{title}</h1>
    </div>
  );
};

export default ItemCard;
