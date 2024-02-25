import React, { useState } from "react";
import InputBar from "./InputBar";
import axios from "axios";
import Go from "./go"; // Ensure the correct import path

const InputBarParent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

// Within InputBarParent component
const handleButtonClick = (event?: React.MouseEvent<HTMLAnchorElement>) => {
  // Optional: Use event.preventDefault() if navigation should not occur immediately
  // event?.preventDefault();

  console.log("Button clicked with value:", inputValue);
  axios.post("http://localhost:3000/calculate", { data: inputValue })
    .then((response) => {
      console.log(response.data);
      // Handle response
    })
    .catch((error) => {
      console.error(error);
    });
};
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <InputBar placeholder="Enter Keywords:" onUpdate={setInputValue} />
      <div style={{ marginLeft: "15px" }}>
        <Go onClick={handleButtonClick} /> {/* No changes needed here */}
      </div>
    </div>
  );
};

export default InputBarParent;

