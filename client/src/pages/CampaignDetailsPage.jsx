import React, { useContext, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { ContractContext } from "../context/ContractContext";
import { convertToDate } from "../utils";

const stateDetailsPage = () => {
  const { donateToCampaign, contract } = useContext(ContractContext);
  const { state } = useLocation();
  const [donationAmount, setDonationAmount] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Funktion, um die Kampagnendetails zu laden (hier pseudo-codeartig angedeutet)

  const handleDonate = async () => {
    setIsLoading(true);
    if (!donationAmount) {
      console.log("Bitte geben Sie einen Betrag ein.");
      return;
    }
    const amountInWei = ethers.utils.parseUnits(donationAmount, 'ether').toHexString();;
    console.log(amountInWei);
    await donateToCampaign(state.id, amountInWei);
    setIsLoading(false);
    navigate('/');
  };


  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">{state.title}</h1>
      <img src={state.image} alt={state.title} style={{ height: '300px', width: '300px', objectFit:'contain' }} />
      <p className="my-4">{state.description}</p>
      <p>
        <strong>Ziel:</strong> {state.target} ETH
      </p>
      <p>
        <strong>Gesammelt:</strong> {state.amountCollected} ETH
      </p>
      <p>
        <strong>Deadline:</strong> {convertToDate(state.deadline)}
      </p>

      <div className="my-4">
        <input
          type="text"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Betrag in ETH"
          className="border p-2"
        />
        <button
          onClick={handleDonate}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading} // Deaktiviert die Schaltfläche, während geladen wird
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0H4z"
                ></path>
              </svg>
              Laden...
            </div>
          ) : (
            "Starten"
          )}
        </button>
      </div>

      {/* Hier könnten Sie eine Liste der Spenden und Spender anzeigen */}
    </div>
  );
};

export default stateDetailsPage;
