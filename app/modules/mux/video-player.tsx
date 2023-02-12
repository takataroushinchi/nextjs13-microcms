"use client";
import MuxPlayer from "@mux/mux-player-react";
export const VideoPlayer = () => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="xcxFcWGU6JA00ELM7Snwv3ujgtYjijUzxux35Sk3ltsI"
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    />
  );
};
