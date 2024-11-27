// src/App.js
import { useEffect, useState } from "react";
import { Topics } from "../components/TopicList";
import TopicDetail from "../components/TopicDetails";
import data from "../data";
import Layout from "../Layout";
import axiosInstance from "../utils/axiosInstance";

function Home() {
  const [subjects, setSubjects] = useState(data);
  const [selectedTopic, setSelectedTopic] = useState<Topics | null>(null);

  const getData = async () => {
    try {
      const res = await axiosInstance.get("/subjects");
      const result = res.data.map((subject: any) => ({
        ...subject,
        active: false,
      }));
      setSubjects(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App px-20 bg-slate-100 min-h-screen py-10">
      <h1 className="text-center mb-10 font-bold text-4xl text-slate-700">
        Etap Learning App
      </h1>

      <Layout
        subjects={subjects}
        setSelectedTopic={setSelectedTopic}
        setSubjects={setSubjects}
      >
        {selectedTopic && <TopicDetail topic={selectedTopic} />}
      </Layout>
    </div>
  );
}

export default Home;
