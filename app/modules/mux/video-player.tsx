"use client";

export const VideoPlayer = () => {
  return (
    <video controls width="100%" height="auto" controlsList="nodownload">
      <source
        src="https://cdn.search.auone.jp/static/web/permanent/img/amp/story01/cover.mp4"
        type="video/mp4"
      />
    </video>
  );
};
