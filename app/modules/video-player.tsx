"use client";

import ReactPlayer from "react-player";

export type Video = {
  id: string;
  title: string;
  url: string;
};

export const VideoPlayer = (props: Video) => {
  const putVideoPlayLog = () => {
    console.log("VideoPlayer Log");
  };

  return (
    <ReactPlayer
      url={props.url}
      className="aspect-video w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
      controls={true}
      width="100%"
      height="100%"
      playing={false}
      onStart={putVideoPlayLog}
    />
  );
};
