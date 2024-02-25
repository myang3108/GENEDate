import React from 'react';

// Update the onClick prop to accept a function that can optionally receive a MouseEvent
const Go: React.FC<{ onClick: (event?: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ onClick }) => {
  return (
    <a href="./pages" 
       className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
       onClick={onClick}> {/* Directly use onClick, allowing event to be passed */}
      <span className="w-full h-full bg-gradient-to-br to-[#A9F1DF] from-[#FFBBBB] absolute"></span>
      <span className="relative px-6 py-3.5 transition-all ease-out bg-[#1a1a1a] rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">Go!</span>
      </span>
    </a>
  );
};

export default Go;
