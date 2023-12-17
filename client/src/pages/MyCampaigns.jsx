import React from 'react'
import { ShowCampaigns } from '../components';

const campaigns = [

]

const MyCampaigns = () => {
  return (
    <div>
      <ShowCampaigns title="Meine Kampagne" campaigns={campaigns}></ShowCampaigns>
    </div>
  )
}

export default MyCampaigns;