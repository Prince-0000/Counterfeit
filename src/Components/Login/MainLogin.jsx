import React from "react";
import { useState } from "react";
import Login from "./Login";
import LoginCompany from "./LoginCompany";
const MainLogin = () => {
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggle = () => {
    setShowComponentOne(!showComponentOne);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle Components</button>
      {showComponentOne ? <Login /> : <LoginCompany />}
    </div>
  );
};

export default MainLogin;
