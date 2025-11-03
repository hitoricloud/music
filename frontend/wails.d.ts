declare global {
  interface Window {
    runtime: {
      WindowMinimise: () => void;
      WindowMaximise: () => void;
      WindowUnmaximise: () => void;
      Quit: () => void;
    };
  }
}
