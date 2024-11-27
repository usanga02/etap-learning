// src/components/TopicList.js
import React, { SetStateAction } from "react";

type Props = {
  topics: Topics[];
  onTopicClick: React.Dispatch<SetStateAction<Topics | null>>;
};

export type Topics = {
  id: string;
  title: string;
  description: string;
};

const TopicList = ({ topics, onTopicClick }: Props) => (
  <div>
    <ul className="">
      {topics.map((topic) => (
        <li
          className="text-slate-50 px-3 py-1 font-bold cursor-pointer hover:bg-slate-600 rounded-sm"
          key={topic.id}
          onClick={() => onTopicClick(topic)}
        >
          {topic.title}
        </li>
      ))}
    </ul>
  </div>
);

export default TopicList;
