"use client";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinksPage from "../pages/page";
import BackButton from "../components/BackButton";
import lebron from "../images/lebron.png";
import michael from "../images/michael_ss.jpg";
import jerry from "../images/jerry.jpg";
const aboutus: React.FC = () => {
  return (
    <main className="h-full overflow-hidden flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
      {/*
          title 
      */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#A9F1DF] from-[#FFBBBB]">
            (gened)ate.
          </span>
        </h1>
      </div>
      <div>
        <div className="fixed top-0 right-0 p-7">
          <BackButton />
        </div>
      </div>
      {/* 4 cards */}
      <div className="flex justify-around">
        <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-32 object-cover object-center"
              src={michael.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Michael Yang
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Floor general, shifty, deadly 3-pt shot.
            </p>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-32 object-cover object-center"
              src={michael.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Michael Yang
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Floor general, shifty, deadly 3-pt shot.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://www.linkedin.com/in/jerryluo-/">
            <img
              className="rounded-t-lg w-full h-32 object-cover object-center"
              src={jerry.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/jerryluo-/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jerry Luo
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The GOAT.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://www.linkedin.com/in/jerryluo-/">
            <img
              className="rounded-t-lg w-full h-32 object-cover object-center"
              src={jerry.src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.linkedin.com/in/jerryluo-/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jerry Luo
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The GOAT.
            </p>
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
