import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../build/Counterfeit.json";
import "./SignUpPeople.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../fire";

const SignUpPeople = () => {
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
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          setState({ provider, signer, contract });
          setAccount(account);
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  const create = async () => {
    const { contract } = state;
    const names = document.querySelector("#name").value;
    console.log(names);

    // const con = await contract.createCompany(name);
    // console.log("simple");
    // console.log(con);
    // console.log("string");
    // console.log(con.toString());
    // console.log("Number");
    // console.log(con.toNumber());
    const tx = await contract.createCompany(names);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    
    // Retrieve the event emitted by the contract
    const event = receipt.events.find((event) => event.event === "CompanyCreated");
    
    // Extract the parameters from the event
    // const owner = event.args.owner;
    // const name = event.args.name;
    const registrationNumber = event.args.registrationNumber;
    console.log(registrationNumber);
    alert(registrationNumber);
  }
  const [User, setUser] = useState({
    name: "",
    password: "",
  });
  const [compName,setCompName]=useState('');
  
  function handleChange(event) {

    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(value);
  }
  const handleNameChange=(event)=>{
    setCompName(event.target.value);
    console.log(compName);
  }
  const handleSubmit1 = (event) => {
    event.preventDefault();
    // Here authentication
    console.log(User);
    createUserWithEmailAndPassword(auth, User.name, User.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: User.name,
        });
        create();
      })
      .catch((err) => {
        console.log(err.message);
      });
      
      {
        setUser({
          name: "",
          password: "",
        });
      }
  };
  return (
    <div className="Wrapper bg">
      <div className="card">
        <form onSubmit={handleSubmit1} className="signup-form">
          <h1 className="headingone">Sign UP company </h1>

          <div className="signup-margin">
          {/* <input type="text" id="name" className="form-control" placeholder="Enter your name"></input> */}
            {/* </div> */}
          <label className="marginn color1">Enter Company Name</label>
            <input
              id="name"
              placeholder = "Enter company name"
              type="text"
              name="name"
              value={compName}
              onChange={handleNameChange}
            />
            <label className="marginn color1">Enter your email</label>
            <input
              type="email"
              name="name"
              value={User.name}
              onChange={handleChange}
            />
            <label className="password color1">Password</label>
            <input
              type="password"
              name="password"
              value={User.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login" onClick={handleSubmit1}>
            Sign up company
          </button>
          <h2 className="heading2">
            {" "}
             Have an account 
            <span>
              <a href="/Login">Login </a>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUpPeople;