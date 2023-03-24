import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
    const navigate= useNavigate();

  const navigateLogin =()=>
  {
    navigate('/Login');
  }  
  return (
    <div className="wrapperLanding bgLanding">
      <div className="cardPart">
        <div className="mainheading">
          <h2>Eliminate Doubt</h2>
          <h2>& Ensure Authenticity</h2>
        </div>
        <h2 className="subHeading">
          Trust us to Verify Your Purchases and list your Products as Verified
          today.
        </h2>

        <button className="button-85" onClick={navigateLogin}>Check Product</button>
      </div>
    </div>
  );
};

export default Landing;
