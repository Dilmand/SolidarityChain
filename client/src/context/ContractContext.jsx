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

  const publishCampaign = async (title, description, target, deadline, image) => {
    const deadLine = new Date(deadline).getTime();
    const ptarget = ethers.utils.parseUnits(target, 'ether').toHexString();
    try {
      await contract.methods.createCampaign(title, description, ptarget, deadLine, image).send({from: currentAccount});
      
    } catch (error) {
      console.log("Faild to publish the campaign", error);
    }
  }

  const getCampaigns = async () => {
    if (!contract) return [];
  
    try {
      const campaigns = await contract.methods.getCampaigns().call();
      const formattedCampaigns = campaigns.map((campaign, id) => ({
        id:id,
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: ethers.BigNumber.from(campaign.deadline).toNumber(),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        donations: campaign.donations, 
        donators: campaign.donators, 

    }));
    return formattedCampaigns;
  } catch (error) {
      console.error("Fehler beim Abrufen der Kampagnen:", error);
      return []; 
  }
  };

  const getDonators = async (id) => {
    if (!contract) return [];
    try {
      const donators = await contract.methods.getDonators(id).call();
      const formattedDonators = [];

    for(let i = 0; i < donators[0].length; i++) {
      formattedDonators.push({
        donator: donators[0][i],
        donation: ethers.utils.formatEther(donators[1][i].toString())
      })
    }

    return formattedDonators;
  } catch (error){
    console.log(error);
  }
};
  const donateToCampaign= async (id, amount) => {
    try {
      await contract.methods.donateToCampaign(id).send({from:currentAccount, value:amount});
      
    } catch (error) {
      console.log("Faild to donate", error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <ContractContext.Provider
      value={{ contract, currentAccount, getCampaigns, connectWallet, publishCampaign, getDonators, donateToCampaign}}
    >
      {children}
    </ContractContext.Provider>
  );
};
