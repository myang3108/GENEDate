"use client";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinksPage from "../pages/page";

const aboutus: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <p className="text-lg text-gray-700">
          Hello! I'm Michael Yang, a Freshman in Computer Engineering! I hope
          you like our project.
        </p>
        {/* Add more personal details or sections as needed */}
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
