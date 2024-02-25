"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinksPage from "../pages/page";
import BackButton from "../components/BackButton";
import aman from "../images/aman.jpeg";
import michael from "../images/michael.jpeg";
import jerry from "../images/jerry.jpeg";
import vasu from "../images/vasu.jpeg";

const aboutus: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
      {/*
          title 
      */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-white">
            welcome to
          </span>
        </h1>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-12 text-5xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#A890FE] from-[#EA8D8D]">
            (gened)ate.
          </span>
        </h1>
      </div>

      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-white">
            meet the team!
          </span>
        </h1>


        <div className="fixed top-0 right-0 p-7">
          <BackButton />
        </div>
      </div>
      {/* 4 cards */}
      <div className="flex justify-around">
        <div className="flex-none w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://www.linkedin.com/in/michaelyang3108">
            <img
              className="w-full h-72 object-cover object-center rounded-t-lg"
              src={michael.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/michaelyang3108">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                Michael Yang
              </h5>
            </a>
          </div>
        </div>

        <div className="flex-none w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://www.linkedin.com/in/aman-ravi-2405lhj/">
            <img
              className="w-full h-72 object-cover object-center rounded-t-lg"
              src={aman.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/aman-ravi-2405lhj/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                Aman Ravishankar
              </h5>
            </a>
          </div>
        </div>

        <div className="flex-none w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://www.linkedin.com/in/jerryluo-/">
            <img
              className="w-full h-72 object-cover object-center rounded-t-lg"
              src={jerry.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/jerryluo-/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                Jerry Luo
              </h5>
            </a>
          </div>
        </div>

        <div className="flex-none w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://www.linkedin.com/in/vasunandan-dar/">
            <img
              className="w-full h-72 object-cover object-center rounded-t-lg"
              src={vasu.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/vasunandan-dar/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                Vasu Dar
              </h5>
            </a>
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/links" Component={LinksPage} />
          {/* Other routes */}
        </Routes>
      </BrowserRouter>

      {/*
          background
      */}
     <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[#1a1a1a]"></div>
    </main>
  );
};

export default aboutus;
