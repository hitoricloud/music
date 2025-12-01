import type { FC } from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: FC<Props> = ({ width, height, className }) => {
  return <div className={`rounded-xl bg-gray-400 animate-pulse ${className}`} />;
};

export default Skeleton;
