import React from 'react';

type ClassInfo = {
  name: string;
  description: string;
  averageGPA: number;
  professorName: string;
  link: string;
};

const ClassTile: React.FC<{ classInfo: ClassInfo }> = ({ classInfo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <h2 className="font-bold text-xl mb-2">{classInfo.name}</h2>
      <p>{classInfo.description}</p>
      <p className="mt-2"><b>Average GPA:</b> {classInfo.averageGPA}</p>
      <p><b>Professor:</b> {classInfo.professorName}</p>
      <a href={classInfo.link} className="text-blue-500 hover:text-blue-700">More Info</a>
    </div>
  );
};

const ClassInfoPage: React.FC = () => {
  const classInfos: ClassInfo[] = [
    {
      name: "Introduction to Programming",
      description: "This course introduces the fundamentals of programming.",
      averageGPA: 3.4,
      professorName: "Dr. Jane Doe",
      link: "https://example.com/class1"
    },
    {
      name: "Advanced Databases",
      description: "Explore advanced topics in database systems.",
      averageGPA: 3.7,
      professorName: "Prof. John Smith",
      link: "https://example.com/class2"
    },
    {
      name: "Machine Learning",
      description: "An introductory course on machine learning algorithms and their applications.",
      averageGPA: 3.9,
      professorName: "Dr. Alan Turing",
      link: "https://example.com/class3"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {classInfos.map((classInfo, index) => (
        <ClassTile key={index} classInfo={classInfo} />
      ))}
    </div>
  );
};

export default ClassInfoPage;