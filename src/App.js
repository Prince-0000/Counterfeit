import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Product from './Components/Product/Product';

function App() {

 
  return(
    <div className='mainApp'>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Verify" element={<DisplayProduct/>}/>
          <Route path="/Product" element={<Product/>}/>
        </Routes>
      </div>
      {/* <Login/>
      
      <Product/>
      <DisplayProduct/> */}

    </div>
  );
}

export default App;