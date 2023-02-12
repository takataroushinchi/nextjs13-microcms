"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

import { VideoDuration } from "@/app/modules/video-duration";

export type Video = {
  id: string;
  title: string;
  url: string;
};

type State = {
  playedSeconds: number;
  played: number;
  loadedSeconds: number;
  loaded: number;
};

export const VideoPlayer = (props: Video) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  const putVideoPlayLog = () => {
    console.log("VideoPlayer Log");
  };

  const handleDuration = (seconds: number) => {
    console.log("onDuration", seconds);
    setDuration(seconds);
  };

  const handleSeek = (seconds: number) => {
    console.log("onSeek", seconds);
    // setPlayed(seconds);
  };

  const handleProgress = (state: State) => {
    // console.log("onProgress", state);
    setPlayed(state.playedSeconds);
  };

  return (
    <div className="bg-slate-80 w-full max-w-sm overflow-hidden rounded-lg p-2 shadow-md">
      <p>{props.title}</p>
      <ReactPlayer
        url={props.url}
        className="aspect-video w-full rounded-lg"
        controls={true}
        width="100%"
        height="100%"
        playing={false}
        onStart={putVideoPlayLog}
        onDuration={handleDuration}
        onSeek={handleSeek}
        onProgress={handleProgress}
      />
      <VideoDuration className={"px-4"} seconds={played} />
      <VideoDuration className={"px-4"} seconds={duration} />
    </div>
  );
};
