import CloseIcon from "./icons/close";
import CollapseIcon from "./icons/collapse";
import ExpandIcon from "./icons/expand";
import LeftArrowIcon from "./icons/left-arrow";
import RightArrowIcon from "./icons/right-arrow";

const Header = () => {
  return (
    <header
      className={
        "w-full flex items-center justify-center outline outline-[#ffffff]/50 px-2 py-1.5 gap-2.5"
      }
    >
      <section className={"flex justify-start grow gap-2.5"}>
        <nav className={"flex"}>
          <button
            className="rounded-md transition-all hover:bg-white/30"
            aria-label={"Перейти назад"}
          >
            <LeftArrowIcon />
          </button>
          <button
            className="rounded-md transition-all hover:bg-white/30"
            aria-label="Перейти вперед"
          >
            <RightArrowIcon />
          </button>
        </nav>
      </section>
      <section className={"flex justify-center grow"}></section>
      <section className={"flex justify-end grow"}>
        <nav className={"flex"}>
          <button
            onClick={window.runtime.WindowMinimise}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Свернуть"
          >
            <CollapseIcon />
          </button>
          <button
            onClick={window.runtime.WindowToggleMaximise}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Развернуть"
          >
            <ExpandIcon />
          </button>
          <button
            onClick={window.runtime.Quit}
            className={"p-2 rounded-md transition-all hover:bg-white/30"}
            aria-label="Закрыть"
          >
            <CloseIcon />
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
