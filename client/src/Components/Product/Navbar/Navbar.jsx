import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          Counterfeit
        </a>
        <button className="navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-links">
          <a className="nav-item nav-link active" href="/">
            Home <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="/Login">
            Login
          </a>
          <a className="nav-item nav-link" href="/Verify">
            Verify
          </a>
          <a className="nav-item nav-link" href="/Product">
            Add Product
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;