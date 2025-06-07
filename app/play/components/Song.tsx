"use client";

import { useEffect, useRef, useState } from "react";
import { TrackState, Song as ISong } from "../page";
import IconPlay from "@/app/components/icon/IconPlay";
import IconPause from "@/app/components/icon/IconPause";

function formatTime(time: number) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

export default function Song({ song }: { song: ISong }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [played, setPlayed] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [trackState, setTrackState] = useState<TrackState>("stoped");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const interval = setInterval(() => {
      setPlayed(audio.currentTime || 0);
      if (audio.buffered.length > 0) {
        setBuffered(audio.buffered.end(audio.buffered.length - 1));
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const playedPercent = (played / song.duration) * 100;
  const bufferedPercent = (buffered / song.duration) * 100;

  const togglePlay = () => {
    if (trackState === "stoped" || trackState === "paused") {
      audioRef.current?.play();
      setTrackState("played");
    }
    if (trackState === "played") {
      audioRef.current?.pause();
      setTrackState("paused");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 px-4">
      <div className="flex flex-col gap-2">
        <p>{`${song.title} - ${song.artist}`}</p>

        <div className="flex gap-3 w-full  ">
          <button
            className="rounded-full w-8 h-8 bg-red-500 items-center p-2 cursor-pointer"
            onClick={togglePlay}
          >
            {trackState === "paused" || trackState === "stoped" ? (
              <IconPlay />
            ) : (
              <IconPause />
            )}
          </button>
          <div className="w-full  h-full mt-2">
            <div className="relative h-2 bg-white rounded-full overflow-hidden">
              {/* Gray bar for downloaded */}
              <div
                className="absolute left-0 top-0 h-full bg-gray-400"
                style={{ width: `${bufferedPercent}%` }}
              />
              {/* Red bar for played */}
              <div
                className="absolute left-0 top-0 h-full bg-red-500"
                style={{ width: `${playedPercent}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>{formatTime(played)}</span>
              <span>{formatTime(song.duration)}</span>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          /* controls */
          /* autoPlay */
          src={`http://localhost:3001/stream?song=${song.id}`}
        />
      </div>
    </div>
  );
}
