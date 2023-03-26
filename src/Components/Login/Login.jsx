import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./SignUpPeople";
import SignUpPeople from "./SignUpPeople";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fire";
// import backgroundImage from "./shubham-dhage-JlijbOtSWuw-unsplash.jpg";
const Login = () => {
  const navigate = useNavigate();
  //  LOGIN FOR SWITCH TAB
  const [showComponentOne, setShowComponentOne] = useState(true);
  // const handleToggleLOG = () => {
  //   console.log("shifting comp user to company");
  //   setShowComponentOne(!showComponentOne);
  // };


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
        const c = async () => {
          const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            if (ethereum) {
              const account = await provider.send("eth_requestAccounts", []);
              window.ethereum.on("chainChanged", () => {
                window.location.reload();
              });
              window.ethereum.on("accountsChanged", () => {
                window.location.reload();
              });
            }else{
              alert("Please install metamask")
            }
        }
        c();
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


  return (
    <div>
      {showComponentOne ? (
        <div className="Wrapper bg">
          <div className="card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <form  className="signup-form">
              <h1 className="headingone">Login</h1>
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
