import { VideoPlayer } from "@/app/modules/video-player";

export default async function MuxPage() {
  return (
    <div className="flex items-start justify-center gap-4">
      <VideoPlayer url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"} />
      <VideoPlayer
        url={
          "https://cdn.search.auone.jp/static/web/permanent/img/amp/story01/cover.mp4"
        }
      />
    </div>
  );
}
