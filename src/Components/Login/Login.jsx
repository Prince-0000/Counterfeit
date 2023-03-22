import { React, useState } from "react";
import './Login.css';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
  return (
    <>
      <div className="signup">
        <div className="heading">
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit1} className="signup-form">
          <div className="signup-margin">
            <label className="marginn">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="signup-margin">
            <label className="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
