import React from 'react'
import { ShowCampaigns } from '../components';

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

const MyCampaigns = () => {
  return (
    <div>
      <ShowCampaigns campaigns={campaigns}></ShowCampaigns>
    </div>
  )
}

export default MyCampaigns;