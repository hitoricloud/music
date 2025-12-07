import { makeAutoObservable } from "mobx";

import type { GeniusSong, PlayerTrack } from "../types";

// адаптация GeniusSong → PlayerTrack

class PlayerStore {
  currentTrack: PlayerTrack | null = null;
  queue: PlayerTrack[] = [];
  isPlaying = false;
  progress = 0;
  volume = 1;

  audio: HTMLAudioElement | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    this.audio = new Audio();
    this.audio.volume = this.volume;

    this.audio.addEventListener("timeupdate", () => {
      this.progress = this.audio?.currentTime ?? 0;
    });

    this.audio.addEventListener("ended", () => {
      this.next();
    });
  }

  mapSongToTrack(song: GeniusSong, audioUrl: string): PlayerTrack {
    return {
      id: song.id,
      title: song.title_with_featured || song.full_title,
      artist: song.primary_artist?.name || song.artist_names,
      cover: song.song_art_image_url || song.header_image_url,
      audioUrl,
      raw: song,
    };
  }

  playGeniusSong(song: GeniusSong, audioUrl: string) {
    const track = this.mapSongToTrack(song, audioUrl);
    this.playTrack(track);
  }

  playTrack(track: PlayerTrack) {
    this.currentTrack = track;
    if (!this.audio) this.init();

    this.audio!.src = track.audioUrl;
    this.audio!.play();
    this.isPlaying = true;
  }

  togglePlay() {
    if (!this.audio) return;
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  next() {
    if (!this.queue.length) {
      this.isPlaying = false;
      return;
    }
    const nextTrack = this.queue.shift()!;
    this.playTrack(nextTrack);
  }

  setProgress(value: number) {
    if (!this.audio) return;
    this.audio.currentTime = value;
    this.progress = value;
  }

  setVolume(v: number) {
    this.volume = v;
    if (this.audio) this.audio.volume = v;
  }

  addToQueue(song: GeniusSong, audioUrl: string) {
    this.queue.push(this.mapSongToTrack(song, audioUrl));
  }

  addManyToQueue(songs: GeniusSong[], audioUrlBuilder: (song: GeniusSong) => string) {
    const tracks = songs.map((s) => this.mapSongToTrack(s, audioUrlBuilder(s)));
    this.queue.push(...tracks);
  }

  clearQueue() {
    this.queue = [];
  }
}

export const playerStore = new PlayerStore();
