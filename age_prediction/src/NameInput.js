import React, { useState } from "react";

  const NameInput = ({ onNameChange }) => {
    const [name, setName] = useState("");
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" onClick={() => {
          onNameChange(name);
        }}>Submit</button>
      </div>
    );
  };
  
  export default NameInput;

