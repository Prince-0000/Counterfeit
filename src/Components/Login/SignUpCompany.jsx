// import { async } from "@firebase/util";
// import { TransactionTypes } from "ethers/lib/utils";
import React  from "react";
import { useState } from "react";


const SignUpCompany = () => {
const [buttonColor, setButtonColor] = useState("red");

const [user, setUser] = useState({
  email: "",
  password: "",
});

let name1, value;
const getUserData = (event) => {
  name1 = event.target.name;
  value = event.target.value;
  setUser({ ...user, [name1]: value });
};

const { email, password } = user;

// https://extended-creek-380015-default-rtdb.asia-southeast1.firebasedatabase.app/CompanySignUpDetails
const postData = async (e) => {
  e.preventDefault();
   
    const res = await fetch(
      "https://extended-creek-380015-default-rtdb.asia-southeast1.firebasedatabase.app/CompanySignUpDetails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      }
    );

    if (res) {
      setUser({
        email: "",
        password: "",
      });
    }

    const data = await res.json();
    console.log(data);
//      catch (error) {
//     console.log(error);
//   }
};

function handleButtonClick(color) {
  setButtonColor(color);
}

  return (
    <div>
      <div className="Wrapper bg">
        <div className="card">
          <form  className="signup-form" method="POST">
            <h1 className="headingone">Sign UP arun</h1>

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
                name="email"
                value={user.email}
                onChange={getUserData}
              />
              <label className="password color1">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={getUserData}
              />
            </div>
            <button type="submit" className="login" onClick={postData}>
              Sign up com
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpCompany;
