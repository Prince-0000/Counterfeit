import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "./SignUpPeople";
import SignUpPeople from "./SignUpPeople";
import LoginCompany from "./LoginCompany";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import SignUpCompany from "./SignUpCompany";
// import backgroundImage from "./shubham-dhage-JlijbOtSWuw-unsplash.jpg";
const Login = () => {
  const navigate = useNavigate();
  //  LOGIN FOR SWITCH TAB
  const [showComponentOne, setShowComponentOne] = useState(true);
  const handleToggleLOG = () => {
    console.log("shifting comp user to company");
    setShowComponentOne(!showComponentOne);
  };

  // const [buttonColor, setButtonColor] = useState("red");
  const [User, setUser] = useState({
    name: "",
    password: "",
  });

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

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    signInWithEmailAndPassword(auth, User.name, User.password)
      .then(async (res) => {
        console.log('succesfull login ',res);

        navigate("/Product");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("call login of compnay ");
  };

  // function handleButtonClick(color) {
  //   setButtonColor(color);
  // }
  console.log("Hello");

  return (
    <div>
      {showComponentOne ? (
        <div className="Wrapper bg">
          <div className="card">
            <form  className="signup-form">
              <h1 className="headingone">Login</h1>

              {/* <div className="buttonBlock">
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
                  Company login 
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
              </div> */}

              <div className="signup-margin">
                <label className="marginn color1">Enter company email</label>
                <input
                  type="email"
                  name="name"
                  value={User.name}
                  onChange={handleChange}
                />
                <label className="password color1">Company Password</label>
                <input
                  type="password"
                  name="password"
                  value={User.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="login" onClick={handleSubmit1}>
                Login Company
              </button>

              <h2 className="heading2">
                {" "}
               Create New account ?
                <span>
                  <a href="/SignUpPeople"> Sign up</a>
                </span>
              </h2>
            </form>
          </div>
        </div>
      ) : (
        <SignUpPeople/>
      )}
    </div>
  );
};

export default Login;
