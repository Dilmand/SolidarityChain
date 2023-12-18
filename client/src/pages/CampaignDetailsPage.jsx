
import React, { useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import { ContractContext } from '../context/ContractContext';
import {convertToDate} from '../utils';

const stateDetailsPage = () => {
  const { id } = useParams(); // Annahme, dass die Kampagnen-ID in der URL verwendet wird
  const { donateToCampaign } = useContext(ContractContext);
  const {state} = useLocation();
  const [donationAmount, setDonationAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // Funktion, um die Kampagnendetails zu laden (hier pseudo-codeartig angedeutet)

  const handleDonate = async () => {
    setIsLoading(true);
    await donateToCampaign(state.id, donationAmount);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">{state.title}</h1>
      <img src={state.image} alt={state.title} className="max-w-lg" />
      <p className="my-4">{state.description}</p>
      <p><strong>Ziel:</strong> {state.target} ETH</p>
      <p><strong>Gesammelt:</strong> {state.amountCollected} ETH</p>
      <p><strong>Deadline:</strong> {convertToDate(state.deadline)}</p>

      <div className="my-4">
        <input
          type="text"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Betrag in ETH"
          className="border p-2"
        />
        <button onClick={handleDonate} className="bg-blue-500 text-white p-2 ml-2">
          Spenden
        </button>
      </div>
      
      {/* Hier könnten Sie eine Liste der Spenden und Spender anzeigen */}
    </div>
  );
};

export default stateDetailsPage;