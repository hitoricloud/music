"use client";

import { useState } from "react";

export default function Home() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  async function playTrack() {
    console.log("▶️ playTrack() called");

    try {
      console.log("window.go:", window.go);
      console.log("window.go.main:", window.go?.main);
      console.log("window.go.main.MusicApp:", window.go?.main?.MusicApp);

      const url = "URL";
      const key = "CENC KEY";

      const codec = "flac";

      console.log("▶️ Calling FullPipeline...");
      const res = await window.go.main.MusicApp.FullPipeline(url, key, codec);
      console.log("FullPipeline result:", res);

      console.log("▶️ Calling GetAudioBytes...");
      const audioBytesFromBackend = await window.go.main.MusicApp.GetAudioBytes("tmp/output.flac");
      console.log("Got bytes:", audioBytesFromBackend?.length);

      const audioBytes = new Uint8Array(audioBytesFromBackend);
      console.log("Uint8Array created:", audioBytes.length);

      const blob = new Blob([audioBytes], { type: `audio/${codec}` });
      const urlObj = URL.createObjectURL(blob);
      console.log("Blob URL:", urlObj);

      const audio = new Audio(urlObj);
      audio.load();
      audio.play();
      console.log("▶️ Audio should be playing");
    } catch (err) {
      console.error("🔥 ERROR:", err);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center p-6 text-xl gap-4">
      <button onClick={playTrack} className="px-4 py-2 bg-blue-600 text-white rounded">
        Play track
      </button>

      {audioUrl && <audio src={audioUrl} controls autoPlay />}
    </main>
  );
}
