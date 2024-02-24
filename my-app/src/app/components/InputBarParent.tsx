"use client";

import React, { useState } from "react";
import InputBar from "./InputBar";
import axios from "axios";

const InputBarParent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
    console.log(inputValue);
    axios
      .post("http://localhost:3000/calculate", { data: inputValue })
      .then((response) => {
        console.log(response.data); // Handle the response from Flask
      })
      .catch((error) => {
        console.error(error); // Handle errors
      });
    // Add your button click logic here
    // SWITCH TO THE RESULT PAGE
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <InputBar placeholder="Keywords:" onUpdate={setInputValue} />
      <button
        onClick={handleButtonClick}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        style={{ height: "58px", marginLeft: "3px" }}
      >
        🚀
      </button>
    </div>
  );
};

export default InputBarParent;
