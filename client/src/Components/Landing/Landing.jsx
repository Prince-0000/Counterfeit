import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/Login");
  };
  const navigateVerify = () => {
    navigate("/Verify");
  };
  return (
    <div className="wrapperLanding bgLanding">
      <div className="cardPart">
        <div className="mainheading" data-aos="fade-down">
          <h2>Eliminate Doubt</h2>
          <h2>& Ensure Authenticity</h2>
        </div>
        <h2 className="subHeading" data-aos="zoom-in">
          Trust us to Verify Your Purchases and list your Products as Verified
          today.
        </h2>
        <div className="row">
          <div className="col">
            <button className="button-85" data-aos="fade-up-right" onClick={navigateVerify}>
              Verify Product
            </button>
          </div>
          <div className="col w-100">
            <button className="button-85 add-button" data-aos="fade-up-left" onClick={navigateLogin}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
