import React from "react";
import "./Product.css";
import { useState } from "react";

const Product = () => {
  // const [companyId, setCompanyId] = useState(0);
  // const [productName, setProductName] = useState("");
  // const [productId, setProductId] = useState("");
  // const [image, setImage] = useState("");
  // const [description,setDescription]=useState("");

  // state of data
  const [product, setProduct] = useState({
    regNo: "",
    productName: "",
    description: "",
    
  });
  const handleSubmit = (event) => {
    event.preventDefault();
      console.log(product);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(value);
  };

  return (
    <>
      <div className="product">
        <h1 className="heading">Add product</h1>
        <div>
          <form onSubmit={handleSubmit} className="form-product">
            <div className="div-product">
              <label className="label-product">company RegNo:</label>
              <input
                type="text"
                placeholder="company id"
                name="regNo"
                value={product.regNo}
                className="input-box"
                onChange={handleChange}
              />
            </div>

            <div className="div-product">
              <label className="label-product">Product name</label>
              <input
                type="text"
                placeholder="Product name"
                name="productName"
                value={product.productName}
                className="input-box"
                onChange={handleChange}
              />
            </div>

            <div className="div-product">
              <label className="label-product">Description</label>
              <input
                type="text"
                placeholder=" Description"
                name="description"
                className="input-box"
                value={product.description}
                onChange={handleChange}
              />
            </div>

            {/* <div className='div-product'>
              <label className='label-product'>Product Url</label>
              <input type="text"
                placeholder='product id'
                value={image}
                className="input-box"
                onChange={(event)=>setImage(event.target.value)}
              />
            </div> */}

            <div className="ButtonParent"><button type="submit" className="submit-product">
              Submit
            </button></div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
