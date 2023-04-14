import React from "react";
import { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Product/Navbar/Navbar";
import Product from './Components/Product/Product';
import SignUpPeople from "./Components/Login/SignUpPeople";

import Landing from "./Components/Landing/Landing";



function App() {
  return (


    <div className='mainApp'>
      <Navbar />
      <div>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Verify" element={<DisplayProduct />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/SignUpPeople" element={<SignUpPeople />} />
          {/* <Route path="/SignUpCompany" element={<SignUpCompany />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;