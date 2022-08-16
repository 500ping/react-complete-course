import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [isShown, setIsShown] = useState(false);

  const buttonClickHandler = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {isShown && <p>Bla bla</p>}
      <Button onClick={buttonClickHandler}>Test</Button>
    </div>
  );
}

export default App;
