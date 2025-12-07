"use client";

//hooks
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

//icons
import CloseIcon from "./icons/close";
import CollapseIcon from "./icons/collapse";
import ExpandIcon from "./icons/expand";
import LeftArrowIcon from "./icons/left-arrow";
import RightArrowIcon from "./icons/right-arrow";

//utils
import { debounce } from "../utils/debounce";
import { observer } from "mobx-react-lite";
import { appStore } from "../store/app-store";

const Header = observer(() => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { push } = useRouter();

  const handleMinimize = (): void => {
    window.runtime.WindowMinimise();
  };

  const handleMaximize = (): void => {
    window.runtime.WindowToggleMaximise();
  };

  const handleQuit = (): void => {
    window.runtime.Quit();
  };

  const debouncedSearch = useMemo(
    () => debounce((value: string) => push(`/search/${value}`), 700),
    []
  );

  useEffect(() => {
    appStore.initializeApp();
  }, []);

  return (
    <header
      style={{ widows: 1 }}
      className={`
        w-full flex items-center justify-center 
        select-none outline bg-(--background)/70 backdrop-blur-xl 
        outline-[#ffffff]/15 px-2 py-1.5 pointer-events-auto 
        ${appStore._appData?.isMac && "pt-8"} gap-2.5
      `}
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
        <input
          name="search"
          className="flex w-full bg-[#363636] py-2 px-4 rounded-sm outline-none"
          placeholder="What listen today?"
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
      </section>
      <section className={"flex justify-end grow"}>
        {!appStore._appData?.isMac && (
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
        )}
      </section>
    </header>
  );
});

export default Header;
