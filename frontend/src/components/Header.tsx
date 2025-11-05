import { useState } from "react";
import CloseIcon from "./icons/close";
import CollapseIcon from "./icons/collapse";
import ExpandIcon from "./icons/expand";
import LeftArrowIcon from "./icons/left-arrow";
import RightArrowIcon from "./icons/right-arrow";
import SearchInput from "./search/SearchInput";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleMinimize = (): void => {
    window.runtime.WindowMinimise();
  };

  const handleMaximize = (): void => {
    window.runtime.WindowToggleMaximise();
  };

  const handleQuit = (): void => {
    window.runtime.Quit();
  };

  return (
    <header
      className={
        "w-full flex items-center justify-center outline outline-[#ffffff]/15 px-2 py-1.5 gap-2.5"
      }
    >
      <section className={"flex justify-start grow gap-2.5"}>
        <nav className={"flex"}>
          <button
            onClick={() => history.back()}
            className="rounded-md p-2 transition-all hover:bg-white/30"
            aria-label={"Back"}
          >
            <LeftArrowIcon />
          </button>
          <button
            onClick={() => history.forward()}
            className="rounded-md p-2 transition-all hover:bg-white/30"
            aria-label="Forward"
          >
            <RightArrowIcon />
          </button>
        </nav>
      </section>
      <section className={"flex justify-center grow"}>
        <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </section>
      <section className={"flex justify-end grow"}>
        <nav className={"flex"}>
          <button
            onClick={handleMinimize}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Minimize"
          >
            <CollapseIcon />
          </button>
          <button
            onClick={handleMaximize}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Maximize"
          >
            <ExpandIcon />
          </button>
          <button
            onClick={handleQuit}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Quit"
          >
            <CloseIcon />
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
