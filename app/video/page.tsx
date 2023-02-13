import type { Video } from "@/app/modules/video-player";
import { VideoPlayer } from "@/app/modules/video-player";

const videoList = [
  {
    id: "xxxxxxxxxx",
    title: "YouTube",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: "yyyy",
    title: "mp4",
    url: "https://cdn.search.auone.jp/static/web/permanent/img/amp/story01/cover.mp4",
  },
] satisfies Video[];

export default async function VideoPage() {
  return (
    <div className="flex items-start justify-center gap-4">
      {videoList.map((video) => {
        return (
          <VideoPlayer
            key={video.id}
            id={video.id}
            title={video.title}
            url={video.url}
          />
        );
      })}
    </div>
  );
}
