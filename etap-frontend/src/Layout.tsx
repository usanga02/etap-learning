import React from "react";
import SubjectList from "./components/SubjectList";

type Props = {
  children: React.ReactNode;
  subjects: any;
  setSubjects: any;
  setSelectedTopic: any;
};

const Layout = ({
  children,
  subjects,
  setSubjects,
  setSelectedTopic,
}: Props) => {
  return (
    <div className="flex gap-32">
      <SubjectList
        subjects={subjects}
        setSubjects={setSubjects}
        setSelectedTopic={setSelectedTopic}
      />
      {children}
    </div>
  );
};

export default Layout;
