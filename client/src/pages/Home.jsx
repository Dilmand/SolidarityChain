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
          setCampaigns(data);
      } catch (error) {
          console.error("Fehler beim Laden der Kampagnen: ", error);
      }
      setIsLoading(false);
  }

    useEffect(() => {
    if(contract) fetchCampaigns();
  },[currentAccount, contract]);


    return(
         <ShowCampaigns title="Laufende Kampagne" campaigns={campaigns} isLoading={isLoading}/>
        
    );

}
export default Home;





/*
const campaigns = [
    {
      id: 1,
      creatorName: 'John Doe',
      title: 'Bildung für alle',
      imageUrl:'https://www.stuttgart.de/leben/bildung/schulen/index.php.media/156580/Schule-GI-skynesher-1000887536.jpg.scaled/56319f0f85c2bd2d30c0fa2dec90ffc6.jpg',
      description: 'Eine kurze Beschreibung der Kampagne...',
      goal: '100 ETH',
      endDate: '2023-12-31',
      // Weitere Daten hier...
    },
    {
      id: 2,
      creatorName: 'John Doe',
      title: 'Bildung für alle',
      imageUrl:'https://www.stuttgart.de/leben/bildung/schulen/index.php.media/156580/Schule-GI-skynesher-1000887536.jpg.scaled/56319f0f85c2bd2d30c0fa2dec90ffc6.jpg',
      description: 'Eine kurze Beschreibung der Kampagne...',
      goal: '100 ETH',
      endDate: '2023-12-31',
      // Weitere Daten hier...
    },
  
  ]

*/