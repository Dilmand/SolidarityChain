import React, {useContext, useState, useEffect} from 'react'
import {ShowCampaigns} from "../components"
import {ContractContext} from "../context/ContractContext";


const Home =() => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const {contract, currentAccount ,getCampaigns } = useContext(ContractContext);

    const fetchCampaigns = async () => {
      setIsLoading(true);
      try {
        const data = await getCampaigns();
        if (data && Array.isArray(data)) {
          const filteredData = data.filter((campaign) => {
            // Stellen Sie sicher, dass campaign.owner und address definiert sind
            const owner = campaign.owner ? campaign.owner.toLowerCase() : '';
            const userAddress = currentAccount ? currentAccount.toLowerCase() : '';
            return owner === userAddress;
          });
          setCampaigns(filteredData);
          console.log(currentAccount);
        } else {
          console.error("Empfangene Daten sind kein Array: ", data);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Kampagnen: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    useEffect(() => {
    if(contract) fetchCampaigns();
  },[currentAccount, contract]);


    return(
         <ShowCampaigns title="Meine Kampagne" campaigns={campaigns} isLoading={isLoading}/>
        
    );

}
export default Home;


