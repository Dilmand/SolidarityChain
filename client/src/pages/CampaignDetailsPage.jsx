
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import { ContractContext } from '../context/ContractContext';

const CampaignDetailsPage = () => {
  const { id } = useParams(); // Annahme, dass die Kampagnen-ID in der URL verwendet wird
  const { contract } = useContext(ContractContext);
  const [donationAmount, setDonationAmount] = useState('');

  // Funktion, um die Kampagnendetails zu laden (hier pseudo-codeartig angedeutet)
  const campaign = {
    owner: "0x...",
    title: "Bildung für alle",
    description: "Eine kurze Beschreibung der Kampagne...",
    target: "10.0", // ETH
    deadline: "2023-12-31",
    amountCollected: "2.0", // ETH
    image: "image-url",
    donations: [], // Array von Spenden
    donators: [], // Array von Spenderadressen
  };

  const handleDonate = async () => {
    if (!contract || !donationAmount) return;

    const amountInWei = ethers.utils.parseEther(donationAmount);
    try {
      await contract.methods.donateToCampaign(id).send({
        from: campaign.owner,
        value: amountInWei
      });
      console.log('Donation successful');
      // Hier könnten Sie die Kampagneninformationen aktualisieren
    } catch (error) {
      console.error('Donation failed', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">{campaign.title}</h1>
      <img src={campaign.image} alt={campaign.title} className="max-w-lg" />
      <p className="my-4">{campaign.description}</p>
      <p><strong>Ziel:</strong> {campaign.target} ETH</p>
      <p><strong>Gesammelt:</strong> {campaign.amountCollected} ETH</p>
      <p><strong>Deadline:</strong> {campaign.deadline}</p>

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

export default CampaignDetailsPage;