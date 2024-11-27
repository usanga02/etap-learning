// src/components/TopicDetail.js
import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import YouTube from "react-youtube";
import { useAuth } from "../context/AuthProvider";

type Props = {
  topic: any;
};

const TopicDetail = ({ topic }: Props) => {
  const [completed, setCompleted] = useState(false);
  const { user } = useAuth();
  console.log(topic);

  const handleVideoEnd = async () => {
    console.log("video ended");
    if (!completed) {
      try {
        await axiosInstance.post(`progress`, {
          userId: user?.id,
          topicId: topic.id,
        });
        setCompleted(true);
        alert("Topic marked as completed!");
      } catch (error) {
        console.error("Error marking topic as completed", error);
      }
    }
  };

  function getYouTubeVideoId(url: string): string | null {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  return (
    <div className="w-fit">
      <h2 className="font-bold relative text-3xl text-slate-500">
        {topic.title}

        {(topic.progress?.[0]?.status == "COMPLETED" || completed) && (
          <span className="bg-green-700 text-xs text-white absolute top-2 ml-3 rounded-md py-1 px-2">
            "Completed"
          </span>
        )}
      </h2>
      <p className="text-lg text-slate-400">{topic.description}</p>
      <div className="mt-4">
        <YouTube
          videoId={getYouTubeVideoId(topic.videoUrl) ?? ""}
          onEnd={handleVideoEnd}
        />
      </div>
    </div>
  );
};

export default TopicDetail;
