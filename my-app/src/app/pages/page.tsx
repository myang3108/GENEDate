"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ClassInfo2 = {
  id: number;
  name: string;
  description: string;
  averageGPA: number;
  professorName: string;
  link: string;
};

type ClassInfo = {
  date: string;
};

const ClassTile: React.FC<{ classInfo: ClassInfo2 }> = ({ classInfo }) => {
  return (
    <div className="m-4 p-1 rounded-lg overflow-hidden bg-gradient-to-br from-[#FFBBBB] to-[#A9F1DF] shadow-lg">
      <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-[#1a1a1a] text-white">
        <h2 className="text-xl font-bold mb-2">{classInfo.name}</h2>
        <p className="flex-1">{classInfo.description}</p>
        <p className="mt-2">Average GPA: {classInfo.averageGPA.toFixed(2)}</p>
        <p>Professor: {classInfo.professorName}</p>
        <a
          href={classInfo.link}
          className="mt-4 text-blue-400 hover:text-blue-600"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

const ClassInfoPage: React.FC = () => {
  //const [classInfos, setClassInfos] = useState<ClassInfo2[]>([]);
  const [month, setMonth] = useState("loading");
  useEffect(() => {
    // Replace 'http://your-api-endpoint/classes' with the Flask endpoint
    fetch("http://127.0.0.1:8080/pages")
      .then((response) => response.json())
      .then((data) => {
        setMonth(data.month);
        console.log(month);
      })
      .catch((error) =>
        console.error(
          "There was an error fetching the class information:",
          error
        )
      );
  }, []);

  return (
    /*
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Class Information
          </h1>
          <p className="text-gray-600">
            Discover classes, their average GPA, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classInfos.map((classInfo) => (
            <ClassTile key={classInfo.id} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </div>
    */
    <div>{month}</div>
  );
};

export default ClassInfoPage;
