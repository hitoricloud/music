import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

import "./style.css";

declare global {
  interface Window {
    runtime: {
      WindowMinimise: () => void;
      WindowMaximise: () => void;
      WindowUnmaximise: () => void;
      WindowSetTitle: (title: string) => void;
      WindowIsMaximised: () => boolean;
      WindowToggleMaximise: () => void;
      Quit: () => void;
    };
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
