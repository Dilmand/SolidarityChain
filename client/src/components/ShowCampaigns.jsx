import React from 'react';
import MyCard from './MyCard';
import { loader } from '../assets';
import { useNavigate } from 'react-router-dom';

const ShowCampaigns = ({title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (campaign, index) => {
    navigate(`/CampaignDetails/:${index}`, { state: campaign })
  }
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-teal-950 text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}
        {!isLoading && campaigns.length > 0 && campaigns.map((campaign, index) => <MyCard
          key={index}
          {...campaign}
          handleClick={() => handleNavigate(campaign, index)}
        />)}
      </div>
    </div>
  );
}

export default ShowCampaigns;
