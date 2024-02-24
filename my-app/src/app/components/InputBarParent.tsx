'use client'

import React, { useState } from "react";
import InputBar from "./InputBar";

const InputBarParent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
    console.log(inputValue);
    // Add your button click logic here
    // SWITCH TO THE RESULT PAGE
  };

  return (
    <div>
      <InputBar placeholder="Type something and press Enter" onUpdate={setInputValue} />
      <button onClick={handleButtonClick} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click me</button>
    </div>
  );
};

export default InputBarParent;