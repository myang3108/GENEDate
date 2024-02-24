import React from 'react';
const AboutButton: 
        React.FC = () => {
            return (
              <a href="https://www.youtube.com/" 
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br  to-emerald-600 from-sky-400 group-hover:ffrom-sky-400  group-hover: to-emerald-600 absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">about</span>
                </span>
              </a>
            );
          };
  
  export default AboutButton;