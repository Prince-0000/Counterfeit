import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-bg">
        <a class="navbar-brand" href="/">
          Counterfeit
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              Home <span class="sr-only"></span>
            </a>
            <a class="nav-item nav-link" href="/Login">
              Login
            </a>
            <a class="nav-item nav-link" href="/Verify">
              Verify
            </a>
            <a class="nav-item nav-link " href="/Product">
              Add Product
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
