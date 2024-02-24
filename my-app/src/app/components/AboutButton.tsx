import React from "react";
import { Link } from "react-router-dom";

const AboutButton: React.FC = () => {
  return (
    <a
      href="./pages/aboutus"
      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
    >
      <span className="w-full h-full bg-gradient-to-br  to-emerald-600 from-sky-400 group-hover: from-sky-400  group-hover: to-emerald-600 absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-color-black rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">about</span>
      </span>
    </a>
  );
};

export default AboutButton;
