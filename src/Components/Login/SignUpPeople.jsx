import React from "react";
import { useState } from "react";
import "./SignUpPeople.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../fire";

const SignUpPeople = () => {

  const [User, setUser] = useState({
    name: "",
    password: "",
  });
  const [compName,setCompName]=useState('');
  
  function handleChange(event) {

    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(value);
  }
  const handleNameChange=(event)=>{
    setCompName(event.target.value);
    console.log(compName);
  }
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
      
      {
        setUser({
          name: "",
          password: "",
        });
      }
  };
  return (
    <div className="Wrapper bg">
      <div className="card">
        <form onSubmit={handleSubmit1} className="signup-form">
          <h1 className="headingone">Sign UP company </h1>

          <div className="signup-margin">
          <label className="marginn color1">Enter Company Name</label>
            <input
              type="text"
              name="name"
              value={compName}
              onChange={handleNameChange}
            />
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
            Sign up company
          </button>
          <h2 className="heading2">
            {" "}
             Have an account 
            <span>
              <a href="/Login">Login </a>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUpPeople;
