import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-bg">
        <a className="navbar-brand" href="/">
          Counterfeit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="/Login">
              Login
            </a>
            <a className="nav-item nav-link" href="/Verify">
              Verify
            </a>
            <a className="nav-item nav-link " href="/Product">
              Add Product
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
