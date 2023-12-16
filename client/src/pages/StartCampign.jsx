import React, { useState } from "react";

const CampaignForm = () => {
  const [campaign, setCampaign] = useState({
    creatorName: "",
    title: "",
    imageUrl: "",
    description: "",
    goal: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik zum Speichern der Kampagnendaten
    console.log(campaign);
  };

  return (
    // Dieser Container füllt die gesamte Bildschirmhöhe aus und zentriert das Formular in der Mitte
    <div className="flex justify-center items-start pt-8 pb-16 h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Kampagne starten
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Formularfelder */}
          <label className="block mb-4">
            <span className="text-gray-700">Name des Erstellers</span>
            <input
              type="text"
              name="creatorName"
              value={campaign.creatorName}
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
              className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Starten
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
