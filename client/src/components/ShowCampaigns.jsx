import React from 'react';
import MyCard from './MyCard';


const ShowCampaigns = ({campaigns}) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {campaigns.map((campaign) => (
          <MyCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default ShowCampaigns;