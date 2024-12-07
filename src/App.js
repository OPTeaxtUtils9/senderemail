import React, { useState } from 'react';
import './index.css'; // Importing index.css file

function App() {
  const [text, setText] = useState("");

  const fetchText = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-text");
      const data = await response.json();
      setText(data.text);
    } catch (error) {
      console.error("Error fetching text:", error);
    }
  };

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <div>
      <button onClick={fetchText}>Next</button>
      <button onClick={copyToClipboard} disabled={!text}>Copy Text</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
