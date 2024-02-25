// MainTitle.tsx

import React from "react";

interface MainTitleProps {
  text?: string; // Optional prop for customizing the text
}

const MainTitle: React.FC<MainTitleProps> = ({ text = "(gened)ate" }) => {
  return (
    <h1
      style={{
        fontSize: "175px",
        fontWeight: "bold",
        background: `linear-gradient(to right, #EA8D8D 48%, #A890FE 36%)`,
      }}
    >
      {text}
    </h1>
  );
};

export default MainTitle;
