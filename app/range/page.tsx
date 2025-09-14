"use client";

import React, { useEffect, useRef, useState } from "react";

const CHUNK_SIZE = 64 * 1024;
const SONG_URL = "http://localhost:3001/stream?song=memori-baik";

export default function StreamingAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaSourceRef = useRef<MediaSource | null>(null);
  const sourceBufferRef = useRef<SourceBuffer | null>(null);
  const [isSetup, setIsSetup] = useState(false);

  const fetchChunk = async (
    start: number,
    end: number,
  ): Promise<Uint8Array> => {
    const res = await fetch(SONG_URL, {
      headers: { Range: `bytes=${start}-${end}` },
    });
    const data = new Uint8Array(await res.arrayBuffer());
    return data;
  };

  const setupStreaming = async () => {
    // Clear existing playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");
      audioRef.current.load();
    }

    const mediaSource = new MediaSource();
    mediaSourceRef.current = mediaSource;

    const audio = audioRef.current!;
    audio.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener("sourceopen", async () => {
      const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
      sourceBufferRef.current = sourceBuffer;

      const head = await fetch(SONG_URL, { method: "HEAD" });
      const size = Number(head.headers.get("Content-Length"));

      let currentByteStart = 0;

      const pump = async () => {
        if (currentByteStart >= size) {
          mediaSource.endOfStream();
          return;
        }

        const end = Math.min(currentByteStart + CHUNK_SIZE - 1, size - 1);
        const chunk = await fetchChunk(currentByteStart, end);
        currentByteStart += chunk.length;

        sourceBuffer.appendBuffer(chunk);
        sourceBuffer.addEventListener("updateend", pump, { once: true });
      };

      await pump();

      const waitForReadyState = () =>
        new Promise<void>((resolve) => {
          const check = () => {
            if (audio.readyState >= 1) {
              resolve();
            } else {
              setTimeout(check, 50);
            }
          };
          check();
        });

      await waitForReadyState();

      audio.play().catch((err) => console.error("❌ audio.play() error", err));
    });
  };

  useEffect(() => {
    if (!isSetup) {
      setupStreaming();
      setIsSetup(true);
    }
  }, [isSetup]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🎧 Streaming Audio</h2>
      <audio ref={audioRef} controls className="w-full" />
    </div>
  );
}
