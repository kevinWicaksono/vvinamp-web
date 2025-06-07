import Song from "./components/Song";

export interface Song {
  title: string;
  artist: string;
  id: string;
  duration: number;
}

const songs: Song[] = [
  {
    title: "Memori Baik",
    artist: "Sheila on 7",
    id: "memori-baik",
    duration: 240,
  },
  {
    title: "Feel Good Inc",
    artist: "Gorillaz",
    id: "feel-good-inc",
    duration: 240,
  },
];

export type TrackState = "played" | "paused" | "stoped";

export default function PlayPage() {
  return (
    <>
      {songs.map((song) => (
        <Song song={song} key={song.id} />
      ))}
    </>
  );
}
