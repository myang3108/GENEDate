import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputBar from "./InputBar";
import Go from "./go"; // Ensure correct import paths

const InputBarParent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [fetchedData, setFetchedData] = useState<Array<{ id: number, data: string }>>([]);

  // Function to fetch data from the backend
  const fetchData = () => {
    axios.get("http://localhost:5000/get-data")
      .then(response => {
        setFetchedData(response.data); // Assume the response is the array of data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    axios.post("http://localhost:5000/calculate", { data: inputValue })
      .then((response) => {
        console.log(response.data);
        // Optionally, fetch updated data after posting
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ marginBottom: "8px" }}>
        <InputBar placeholder="Keywords:" onUpdate={setInputValue} />
        <div style={{ marginLeft: "8px" }}>
          <Go onClick={handleButtonClick} />
        </div>
      </div>
      <div>
        <h3>Stored Data:</h3>
        {fetchedData.map((entry) => (
          <div key={entry.id}>{entry.data}</div>
        ))}
      </div>
    </div>
  );
};

export default InputBarParent;