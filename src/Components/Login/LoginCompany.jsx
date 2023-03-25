import React from "react";
import { useState } from "react";
import Login from "./Login";


import { auth } from "../../fire";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginCompany = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("red");
  const [showComponentOne, setShowComponentOne] = useState(true);
 
  const handleToggleLOG = () => {
    console.log("shifting comp user to company");
    setShowComponentOne(!showComponentOne);
    // setButtonColor(color);
  };
  //--------------
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  console.log(`your email${email} and pass ${password}`);
  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    console.log("in handle submit ");
   
    signInWithEmailAndPassword(auth, email,password)
    .then(async (res) => {
      console.log('this is to show login is succesfull',res);
    
      
    })
    .catch((err) => {
      console.log('this is a fucking error ',err);
    });
 
        
  };


  function handleButtonClick(color) {
    
  }

  // ---login ----
  // const auth=app.auth();
  // app.auth().signInWithEmailAndPassword(email,password)
  //     .then((userCredential) => {
  //       // User successfully signed in
  //       const user = userCredential.user;
  //       console.log(`User ${user.uid} signed in`);
        
  //     })
  // -----
  
  // ----
      // .catch((err)=>{
      //     console.log(err ,'error while login in');
      // })
  return (
    <div>
        {showComponentOne? (<div className="Wrapper bg">
        <div className="card">
          <form className="signup-form">
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
                value={email}
                onChange={handleEmailChange}
              />
              <label className="password color1">Company Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            </div>
            <button type="submit" className="login" onClick={handleSubmit1}>
              Login Comp
            </button>

            <h2 className="heading2">
              {" "}
              Already have an account?
              <span>
                <a href="/SignUpCompany"> Sign in</a>
              </span>
            </h2>
          </form>
        </div>
      </div>):(<Login/>)}
      
    </div>
  );
};

export default LoginCompany;
