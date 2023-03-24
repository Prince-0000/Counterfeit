import React from "react";
import { useState } from "react";
import "./SignUpPeople.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const SignUpPeople = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("red");
  const [User,setUser] = useState({
    name:"",
    password:""

  })
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => {
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
    console.log(User);
    createUserWithEmailAndPassword(auth, User.name, User.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: User.name,
        });
      })
      .catch((err) => {
       
        console.log(err.message);
      });
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
          <button type="submit" className="login" onClick={handleSubmit1}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPeople;
