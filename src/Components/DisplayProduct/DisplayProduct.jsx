import React, { useEffect } from "react";
import "./DisplayProduct.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const DisplayProduct = () => {
  // const [companyId, setCompanyId] = useState(0);
  // const [productName, setProductName] = useState("");
  // const [productId, setProductId] = useState("");
  // const [image, setImage] = useState("");
  // const [description, setDescription] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // here put data in object of product from block chain
  // };
  // const [idFinal,setIdFinal]=useState(null);
  useEffect(() => {
    // --------
   
    

    // ------
  }, []);
  const[naam,setNaam]=useState('');

  const Display=(event)=>{

    event.preventDefault();
    const regId = document.querySelector("#reg").value;
    console.log(regId);

    setNaam("aruun");
  }
  

  // const handleSubmit=(event)=>{

  //   console.log(event);
  // }
  return (
    <>
    <div className="big">
      <h1>Verify Your Product</h1>
      <div>
        <form onClick={Display}>
        <div className="div">
              <label className="label-product">Product id</label>
              <input
                type="text"
                id="reg"
                placeholder="Product id"
                name="regNo"
                // value={product.regNo}
                className="input-box"
                // onChange={handleChange}
              />
            </div>
            <div className="button-dis">
            <button type="submit" className="submit-product">
              Verify!
            </button>
            </div>
        </form>
      </div>
      <div className="verified">
        <h2>Your Product Has Been verified</h2>
        <div className="product-name">{naam}</div>
        <div className="product-disc">disc</div>
       
      </div>
      <div className="un-verified">
        <h2>Your Product is Fake !</h2>
        <div className="connect">Complain </div>
       
      </div>
    </div>
    </>
  );
};

export default DisplayProduct;
