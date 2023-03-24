import React from "react";
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
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="row">
            <div class="col">

              <div className="row">Product</div>
              <div className="row">Product id</div>
              <div className="row">Product Desc</div>
            </div>
            <div class="col">
              <div className="display-img">kljlfsjaflkjasdf</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProduct;
