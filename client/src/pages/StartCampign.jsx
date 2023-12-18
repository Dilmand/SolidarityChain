import React, { useState, useContext} from "react";
import {ContractContext} from "../context/ContractContext";
import { daysLeft, convertToUnixTimestamp} from '../utils';
import { useNavigate } from 'react-router-dom';


const CampaignForm = () => {
  const {currentAccount, publishCampaign} = useContext(ContractContext);
  const[isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    creator: '',
    title: '',
    imageUrl: '',
    description: '',
    goal: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await publishCampaign(campaign.title, campaign.description, campaign.goal, campaign.endDate, campaign.imageUrl);
    setIsLoading(false);
    navigate('/');

  };
  return (
    <div className="flex justify-center items-start pt-8 pb-16 h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Kampagne starten
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Formularfelder */}
          <label className="block mb-4">
            <span className="text-gray-700">Inhaber</span>
            <input
              type="text"
              name="creatorName"
              value={currentAccount}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Titel</span>
            <input
              type="text"
              name="title"
              value={campaign.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Bild URL</span>
            <input
              type="text"
              name="imageUrl"
              value={campaign.imageUrl}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Beschreibung
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={campaign.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <label className="block mb-4">
            <span className="text-gray-700">Ziel der Kampagne (in Ether)</span>
            <input
              type="text"
              name="goal"
              value={campaign.goal}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Ablaufsdatum der Kampagne</span>
            <input
              type="date"
              name="endDate"
              value={campaign.endDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <div className="flex justify-center mt-8">
          <button
  type="submit"
  className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  disabled={isLoading} // Deaktiviert die Schaltfläche, während geladen wird
>
  {isLoading ? (
    <div className="flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
      </svg>
      Laden...
    </div>
  ) : (
    "Starten"
  )}
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
