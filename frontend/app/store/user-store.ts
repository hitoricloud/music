import { makeAutoObservable } from "mobx";

import type { GeniusSong, PlayerTrack } from "../types";

// адаптация GeniusSong → PlayerTrack
export interface Playlist {
  title: string;
  cover?: string;
  description?: string;
  pathname: string;
  tracks: PlayerTrack[] | null;
}

class UserStore {
  playlists: Playlist[] = [
    {
      title: "Hurry Up Tomorrow",
      description: "The Weeknd",
      cover: "https://images.genius.com/f88f169c51765afadd1e2add95f76cb0.1000x1000x1.png",
      pathname: "/playlist/hurryuptomorrow",
      tracks: [],
    },
    {
      title: "Whole Lotta Red",
      description: "Playboi Carti",
      cover: "https://images.genius.com/5a4516e086091510752ca9a49bc5bfef.300x300x1.png",
      pathname: "/playlist/wholelottared",
      tracks: [],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addToFavorite(track: PlayerTrack) {}

  createPlaylist({ title, cover, description, pathname }: Omit<Playlist, "tracks">) {
    this.playlists.push({
      title: title,
      cover: cover,
      description: description,
      pathname: pathname,
      tracks: [],
    });
  }
}

export const userStore = new UserStore();
