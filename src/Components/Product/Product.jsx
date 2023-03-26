import React from "react";
import "./Product.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../build/Counterfeit.json";

const Product = () => {

  // state of data
  const [product, setProduct] = useState({
    regNo: "",
    productName: "",
    description: "",
  });

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("none");
  useEffect(()=>{
    const connectWallet = async () => {
      const contractAddress = "0x6830dA99A15dA10ADEa9E4E116084b56c47d3ae4"; //contract address
      const contractAbi = abi.abi; //fetching abi
      console.log(contractAbi);
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        if (ethereum) {
          const account = await provider.send("eth_requestAccounts", []);
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const signer = provider.getSigner();
          console.log(signer);
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          setState({ provider, signer, contract });
          setAccount(account);
          console.log(account);
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  },[]);
  const prod = async (e) => {
    e.preventDefault();
    // console.log(product);
    const regId = document.querySelector("#reg").value;
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#des").value;

    console.log(regId);
    console.log(name);
    console.log(description);

    const { contract } = state;
    console.log(contract);
    console.log("0");

    const tx = await contract.createProduct(regId, name, description);
    console.log("#");
    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("1");
    const event = receipt.events.find((event) => event.event === "ProductAdded");
    console.log("2");
    const productId= event.args.productId;
    alert(productId);
    console.log(productId);
    console.log(productId._hex);
    // const product = event.args.productId;
    // const naam = event.args.name;
    // console.log(naam);
    // console.log(product);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="product" data-aos="fade-down">
        <h1 className="heading">Add product</h1>
        <div>
          <form onSubmit={prod} className="form-product">
            <div className="div-product">
              <label className="label-product">company RegNo:</label>
              <input
                type="text"
                id="reg"
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
                id="name"
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
                id="des"
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
            <div className="buttonParent"><button type="submit" className="submit-product">
              Submit
            </button></div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
