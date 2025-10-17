import type { FC } from "react";

interface Props {
  username: string;
}

const Grace: FC<Props> = ({ username }) => {
  return <div>Grace to {username}</div>;
};

export default Grace;
