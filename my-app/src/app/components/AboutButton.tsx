import React from 'react';
const AboutButton: 
        React.FC = () => {
            return (
              <a href="./AboutPage" 
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
               <span className="w-full h-full bg-gradient-to-br to-[#A890FE] from-[#EA8D8D] group-hover:from-[#EA8D8D] group-hover:to-[#A890FE] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-[#1a1a1a] rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">about</span>
                </span>
              </a>
            );
          };
  
  export default AboutButton;