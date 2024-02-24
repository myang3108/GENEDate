import React from "react";

const InputBar: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};

export default InputBar;
