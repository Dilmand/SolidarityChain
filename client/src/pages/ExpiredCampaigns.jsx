
import React, {useContext, useState, useEffect} from 'react'
import {ShowCampaigns} from "../components"
import {ContractContext} from "../context/ContractContext";


const ExpiredCampaigns = () => {

  const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const {contract, currentAccount ,getCampaigns } = useContext(ContractContext);

    const fetchCampaigns = async () => {
      setIsLoading(true);
      try {
        const data = await getCampaigns();
        if (data && Array.isArray(data)) {
          const now = Date.now(); // Aktuelles Datum als Unix-Zeitstempel
  
          const filteredData = data.filter((campaign) => {
            const deadline = new Date(campaign.deadline * 1000); // Umwandlung in ein JavaScript-Date-Objekt
            return deadline.getTime() < now; // Überprüfen, ob die Deadline in der Vergangenheit liegt
          });
  
          setCampaigns(filteredData);
        } else {
          console.error("Empfangene Daten sind kein Array: ", data);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Kampagnen: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
    if(contract) fetchCampaigns();
  },[currentAccount, contract]);
  return (
    <ShowCampaigns title="Abgelaufene Kampagne" campaigns={campaigns} isLoading={isLoading}/>
  )
}

export default ExpiredCampaigns;