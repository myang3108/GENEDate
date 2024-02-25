"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import styles from '/ClassInfoPage.module.css';

type ClassInfo = {
  name: string;
  description: string;
  Credit_Hours: string;
  Degree_Attributes: string;
  Type: string;
  Instructors: string;
  Class: string;
  ProfRating: string;
  averageGPA: number;
  link: string;
};

const ClassTile: React.FC<{ classInfo: ClassInfo }> = ({ classInfo }) => {
  return (
    <div className="block m-4 p-1 rounded-lg overflow-hidden bg-gradient-to-br from-[#EA8D8D] to-[#A890FE] shadow-lg">
      <div className="flex flex-col justify-between h-full p-6 rounded-lg bg-[#1a1a1a] text-white">
        <h2 className="text-xl font-bold mb-2">{classInfo.name}</h2>
        <p className="flex-1">{classInfo.description}</p>
        <br></br>
        <p>Average GPA: {classInfo.averageGPA.toFixed(2)}</p>
        <p>Professor: {classInfo.Instructors} | Rating: {classInfo.ProfRating}</p>
        <p >Degree Attributes: {classInfo.Degree_Attributes}</p>
        <p >Credit Hours: {classInfo.Credit_Hours}</p>
        <a
          href={classInfo.link}
          className="mt-4 text-blue-400 hover:text-blue-600"
        >
          Click to see your peers' thoughts!
        </a>
      </div>
    </div>
  );
};

const ClassInfoPage: React.FC = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo>({
    name: '',
    description: '',
    Credit_Hours: '',
    Degree_Attributes: '',
    Type: '',
    Instructors: '',
    Class: '',
    ProfRating: '',
    averageGPA: 0,
    link: ''
  });
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a 10-second loading process before fetching the data
    setTimeout(() => {
      fetch("http://127.0.0.1:8080/pages")
        .then((response) => response.json())
        .then((data) => {
          setClassInfo(data);
          setIsLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("There was an error fetching the class information:", error);
          setIsLoading(false); // Ensure loading state is set to false even if there is an error
        });
    }, 9500); // Wait 10 seconds before fetching the data
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[#1a1a1a]"></div>
        <div className={styles.loader}></div> {/* Use your custom loader class here */}
      </div>
    );
  }

  return (
    <div className="p-5 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="mb-12 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#A890FE] from-[#EA8D8D]">
              (gened)ate.
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
            <ClassTile key={classInfo.Class} classInfo={classInfo} />
          
        </div>
      </div>
      <div className="fixed top-0 right-0 p-7">
        <BackButton />
      </div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[#1a1a1a]"></div>
    </div>
  );
};

export default ClassInfoPage;