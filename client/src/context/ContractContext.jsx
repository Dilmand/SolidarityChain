import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "./constans";
import Web3 from "web3";
export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    }
  }, []);

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
    if (!contract) return [];
  
    try {
      const campaigns = await contract.methods.getCampaigns().call();
      const formattedCampaigns = campaigns.map((campaign, id) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: new Date(Number(campaign.deadline) * 1000).toLocaleDateString(), // Konvertierung des Unix-Zeitstempels in ein lesbares Datum
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        donations: campaign.donations, // Dies scheint bereits ein Array zu sein
        donators: campaign.donators, // Dies scheint ebenfalls bereits ein Array zu sein
        // pId könnten Sie weglassen, es sei denn, es gibt einen spezifischen Grund, ihn zu behalten
    }));
    return formattedCampaigns;
  } catch (error) {
      console.error("Fehler beim Abrufen der Kampagnen:", error);
      return []; 
  }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <ContractContext.Provider
      value={{ contract, currentAccount, getCampaigns, connectWallet }}
    >
      {children}
    </ContractContext.Provider>
  );
};
