import React, { useState, useEffect } from "react";
import axios from "axios";
import NameInput from "./NameInput";
import Display from "./Display";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setAge(response.data.age);
    });
  
  }, [name]);

  return (
    <div>
      <NameInput onNameChange={setName} />
      <Display predictedAge={age} />
    </div>
  );
};

export default App;