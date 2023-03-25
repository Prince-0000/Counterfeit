import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./build/Counterfeit.json";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Product from './Components/Product/Product';
import SignUpPeople from "./Components/Login/SignUpPeople";
import SignUpCompany from "./Components/Login/SignUpCompany";
// import MainLogin from "./Components/Login/MainLogin";
import Landing from "./Components/Landing/Landing";


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("none");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xc5cc25d430a60470B5B69A83fa3416e4874d74b2"; //contract address
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
          // const amount = {value:ethers.utils.parseEther("0.00000001")};
          // await contract.buyCoffee("Prince","Bro",amount);
          // const detail = await contract.getDetails();
          // console.log("Detail: ",detail);
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
  }, []);
  return (
    <div className='mainApp'>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login state={state}/>}/>
          <Route path="/Verify" element={<DisplayProduct />} />
         
          

          <Route path="/Product" element={<Product />} />
          <Route path="/SignUpPeople" element={<SignUpPeople />} />
          <Route path="/SignUpCompany" element={<SignUpCompany />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;