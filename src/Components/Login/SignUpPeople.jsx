import React from "react";
import { useState } from "react";
import "./SignUpPeople.css";

const SignUpPeople = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("red");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    console.log(`Username: ${username}, Password: ${password}`);
  };

  function handleButtonClick(color) {
    setButtonColor(color);
  }

  return (
    <div className="Wrapper bg">
      <div className="card">
        <form onSubmit={handleSubmit1} className="signup-form">
          <h1 className="headingone">Sign In</h1>

          <div className="buttonBlock">
            <button
              id="button1"
              className="buttons"
              style={{
                backgroundColor: buttonColor === "red" ? "white" : null,
              }}
              onClick={() => handleButtonClick("red")}
            >
              people
            </button>
            <button
              id="button2"
              className="buttons"
              style={{
                backgroundColor: buttonColor === "blue" ? "white" : null,
              }}
              onClick={() => handleButtonClick("blue")}
            >
              company
            </button>
          </div>

          <div className="signup-margin">
            <label className="marginn color1">Enter your email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <label className="password color1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPeople;
