import React from "react";
import { useState } from "react";
import Login from "./Login";

const LoginCompany = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("red");
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggleLOG = () => {
    console.log("shifting comp user to company");
    setShowComponentOne(!showComponentOne);
    // setButtonColor(color);
  };
  //--------------
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
  };

  function handleButtonClick(color) {
    
  }
  return (
    <div>
        {showComponentOne? (<div className="Wrapper bg">
        <div className="card">
          <form onSubmit={handleSubmit1} className="signup-form">
            <h1 className="headingone">Companyyy</h1>

            <div className="buttonBlock">
              <button
                id="button1"
                className="buttons"
                style={{
                  backgroundColor: buttonColor === "red" ? "white" : null,
                }}
                onClick={handleToggleLOG}
              >
                people
              </button>
              <button
                id="button2"
                className="buttons"
                style={{
                  backgroundColor: buttonColor === "blue" ? "white" : null,
                }}
                onClick={handleToggleLOG}
              >
                company
              </button>
            </div>

            <div className="signup-margin">
              <label className="marginn color1">Enter Company email</label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
              {/* <label className="password color1">Company Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            /> */}
            </div>
            <button type="submit" className="login">
              Sign up
            </button>

            <h2 className="heading2">
              {" "}
              Already have an account?
              <span>
                <a href="/SignUpPeople"> Sign in</a>
              </span>
            </h2>
          </form>
        </div>
      </div>):(<Login/>)}
      
    </div>
  );
};

export default LoginCompany;
