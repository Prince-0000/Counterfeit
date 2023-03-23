import React from "react";
import "./App.css";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
// import Login from './Components/Login/Login';
import Product from './Components/Product/Product';

function App() {

 
  return (
    <div className='App'>
      
      {/* <Login/> */}
    
    <Product/>
    <DisplayProduct/>
    </div>
  );
}

export default App;