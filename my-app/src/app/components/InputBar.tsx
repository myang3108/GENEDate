'use client'
import React, { useState, ChangeEvent } from "react";

const InputBar: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  //inputValue is what the user gives us
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
    />
  );
};

export default InputBar;
