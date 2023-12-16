import React from 'react'
import {MyCard, ShowCampaigns} from "../components"
import { useState } from "react";
import { Link } from 'react-router-dom';

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
    {
      id: 3,
      creatorName: 'John Doe',
      title: 'Bildung für alle',
      imageUrl:'https://www.stuttgart.de/leben/bildung/schulen/index.php.media/156580/Schule-GI-skynesher-1000887536.jpg.scaled/56319f0f85c2bd2d30c0fa2dec90ffc6.jpg',
      description: 'Eine kurze Beschreibung der Kampagne...',
      goal: '100 ETH',
      endDate: '2023-12-31',
      // Weitere Daten hier...
    },
    {
      id: 4,
      creatorName: 'John Doe',
      title: 'Bildung für alle',
      imageUrl:'https://www.stuttgart.de/leben/bildung/schulen/index.php.media/156580/Schule-GI-skynesher-1000887536.jpg.scaled/56319f0f85c2bd2d30c0fa2dec90ffc6.jpg',
      description: 'Eine kurze Beschreibung der Kampagne...',
      goal: '100 ETH',
      endDate: '2023-12-31',
      // Weitere Daten hier...
    },
    {
      id: 5,
      creatorName: 'John Doe',
      title: 'Bildung für alle',
      imageUrl:'https://www.stuttgart.de/leben/bildung/schulen/index.php.media/156580/Schule-GI-skynesher-1000887536.jpg.scaled/56319f0f85c2bd2d30c0fa2dec90ffc6.jpg',
      description: 'Eine kurze Beschreibung der Kampagne...',
      goal: '100 ETH',
      endDate: '2023-12-31',
      // Weitere Daten hier...
    },
  
    // Weitere Kampagnenobjekte...
  ];

const Home =() => {
    return(
        <div>
         <ShowCampaigns campaigns={campaigns}/> 
        </div>
    );

}
export default Home;