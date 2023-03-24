import React from "react";
import { useState } from "react";
import "./SignUpPeople.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
const secondaryAppConfig = {
  apiKey: "AIzaSyCMQK1GaPPFOzeBznxQDqpZMgH2EDDoWvU",
  authDomain: "my-second-146ec.firebaseapp.com",
  projectId: "my-second-146ec",
  storageBucket: "my-second-146ec.appspot.com",
  messagingSenderId: "1002278165100",
  appId: "1:1002278165100:web:e7764b8739586674679649",
  measurementId: "G-NLW8PJE7T7"
};
firebase.initializeApp(secondaryAppConfig);
const auth = firebase.auth();
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth2 } from "../../firebase2";

const SignUpPeople = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
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

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    console.log(User);
    createUserWithEmailAndPassword(auth2, User.name, User.password)
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
          <h1 className="headingone">Sign In Company</h1>

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
