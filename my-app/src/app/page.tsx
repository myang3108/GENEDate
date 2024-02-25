"use client";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "flowbite-react";
import AboutButton from "./components/AboutButton";
import Go from "./components/go";
import MainTitle from "./components/MainTitle";
import type { NextPage } from "next";
import Head from "next/head";
import InputBar from "./components/InputBar";
import InputBarParent from "./components/InputBarParent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Link from 'next/link';
import aboutus from "./AboutPage/page";
import { useCallback } from "react";
import LinksPage from "./pages/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      {/*
          title 
      */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        <h1 className="mt-0 mb-13 text-5xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#A890FE] from-[#EA8D8D]">
            (gened)ate.
          </span>
        </h1>
      </div>

      {/*
          input field
      */}
      <div>
        <main className="mb-5 p-10">
          <InputBarParent />
        </main>
      </div>

      <div>
      <div className="fixed top-0 right-0 p-7">
        <AboutButton />
      </div>
      </div>
      
      {/*
          background
      */}
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-[#1a1a1a]"></div>
    </main>
    
  );
}
