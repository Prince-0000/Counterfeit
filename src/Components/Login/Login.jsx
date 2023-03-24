import React from "react";
import { useState } from "react";
import "./Login.css";
import "./SignUpPeople";
import SignUpPeople from "./SignUpPeople";
import LoginCompany from "./LoginCompany";
// import backgroundImage from "./shubham-dhage-JlijbOtSWuw-unsplash.jpg";
const Login = () => {
  //  LOGIN FOR SWITCH TAB
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggleLOG = () => {
    console.log("shifting comp user to company");
    setShowComponentOne(!showComponentOne);
  };
  //--------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("red");
  const [User,setUser] = useState({
    name:"",
    password:""

  })

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    console.log(value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    console.log("call login of compnay ");
  };

  function handleButtonClick(color) {
    setButtonColor(color);
  }

  return (
    <div>

      {showComponentOne ? (
        <div className="Wrapper bg">
          <div className="card">
            <form onSubmit={handleSubmit1} className="signup-form">
              <h1 className="headingone">Login</h1>

              <div className="buttonBlock">
                <button
                  id="button1"
                  className="buttons"
                  style={{
                    backgroundColor: buttonColor === "red" ? "white" : null,
                  }}
                  // onClick={() => handleButtonClick("red")
                  // }
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
                  // onClick={() => handleButtonClick("blue")}
                  onClick={handleToggleLOG}
                >
                  company
                </button>
              </div>

              <div className="signup-margin">
                <label className="marginn color1">Enter your email</label>
                <input
                  type="email"
                  name="name"
                  value={User.name}
                  onChange={handleChange}
                />
                <label className="password color1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={User.password}
                  onChange={handleChange}
                />
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
        </div>
      ) : (
        <LoginCompany />
      )}
    </div>
  );
};

export default Login;
