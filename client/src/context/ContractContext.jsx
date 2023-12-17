import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "./constans";

export const ContractContext = React.createContext();


  const getEthereumContract = () => {
    if (typeof window !== "undefined" && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const MyContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log({ provider, signer, MyContract });
    } else {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
    }
  };

export const ContractProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No logged Account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const getCampaigns = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");
      getEthereumContract();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <ContractContext.Provider
      value={{ connectWallet, currentAccount, getCampaigns }}
    >
      {children}
    </ContractContext.Provider>
  );
};
