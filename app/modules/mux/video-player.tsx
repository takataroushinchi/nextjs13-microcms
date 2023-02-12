"use client";

import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  const putVideoPlayLog = () => {
    console.log("VideoPlayer Log");
  };
  return (
    <ReactPlayer
      url={
        "https://cdn.search.auone.jp/static/web/permanent/img/amp/story01/cover.mp4"
      }
      className="react-player"
      controls={true}
      width="100%"
      height="100%"
      playing={false}
      onStart={() => putVideoPlayLog()}
    />
  );
};
