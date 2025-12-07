import { makeAutoObservable } from "mobx";

interface AppData {
  isMac: boolean;

  theme: "light" | "dark" | "system";
}

class AppStore {
  _appData: AppData | null = null;

  sidebarCollapsed = false;
  isPlayerExpanded = false;

  volume = 0.8;
  isMuted = false;

  activeModal: string | null = null;

  toasts: Array<{ id: number; message: string; type: "success" | "error" | "info" }> = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  initializeApp() {
    const ua = navigator.userAgent;

    this._appData = {
      isMac: ua.includes("Mac OS X"),
      theme: "system",
    };
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setPlayerExpanded(state: boolean) {
    this.isPlayerExpanded = state;
  }

  setVolume(value: number) {
    this.volume = Math.min(Math.max(value, 0), 1);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  addToast(message: string, type: "success" | "error" | "info" = "info") {
    const id = Date.now();
    this.toasts.push({ id, message, type });

    setTimeout(() => {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    }, 4000);
  }
}

export const appStore = new AppStore();
