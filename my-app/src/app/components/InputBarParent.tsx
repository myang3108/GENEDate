"use client";

import React, { useState } from "react";
import InputBar from "./InputBar";
import axios from "axios";
import Go from "./go";

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
      <div style={{ marginLeft: "8px" }}>
      <Go />
      </div>
    </div>
  );
};


export default InputBarParent;
