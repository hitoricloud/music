import type { ChangeEventHandler, FC } from "react";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      name="search"
      className="flex w-full bg-[#363636] p-2 rounded-sm outline-none"
      placeholder="Song, Album, Artist..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
