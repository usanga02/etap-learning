// src/components/SubjectList.js
import React, { SetStateAction } from "react";
import TopicList, { Topics } from "./TopicList";
import data from "../data";
import { AuthContextType, useAuth } from "../context/AuthProvider";

type Props = {
  subjects: {
    id: number;
    active: boolean;
    title: string;
    topics: any[];
  }[];
  setSubjects: React.Dispatch<SetStateAction<typeof data>>;
  setSelectedTopic: React.Dispatch<SetStateAction<Topics | null>>;
};

const SubjectList = ({ subjects, setSubjects, setSelectedTopic }: Props) => {
  const { logout } = useAuth() as AuthContextType;
  const toggleTopics = (id: number) => {
    setSubjects((prev) =>
      [...prev].map((subject) => ({
        ...subject,
        active: subject.active ? false : id === subject.id,
      }))
    );
  };

  return (
    <div className="w-1/4 pt-3">
      <h2 className="text-slate-300 text-center p-2 font-bold bg-slate-600">
        Subjects
      </h2>
      <ul className="space-y-2 p-2 bg-slate-700">
        {subjects.map((subject) => (
          <div key={subject.id}>
            <li
              className={`px-4 py-2 cursor-pointer font-bold text-slate-900 rounded-sm bg-slate-400`}
              key={subject.id}
              onClick={() => toggleTopics(subject.id)}
            >
              {subject.title}
            </li>
            {subject.active && (
              <TopicList
                topics={subject.topics}
                onTopicClick={setSelectedTopic}
              />
            )}
          </div>
        ))}
      </ul>
      <p
        className="cursor-pointer py-2 text-center w-full bg-slate-200 text-slate-700 hover:underline"
        onClick={logout}
      >
        logout
      </p>
    </div>
  );
};

export default SubjectList;
