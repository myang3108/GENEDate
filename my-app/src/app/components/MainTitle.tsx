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
        background: `linear-gradient(to right, #FFBBBB 48%, #A9F1DF 36%)`,
      }}
    >
      {text}
    </h1>
  );
};

export default MainTitle;
