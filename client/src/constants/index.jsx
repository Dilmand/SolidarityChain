import { LuLayoutDashboard } from "react-icons/lu";
import { BsSkipStart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import React from 'react';



export const navlinks = [
  {
    key: 'campains',
    label: 'Kampagne',
    icon: <LuLayoutDashboard />,
    path: '/',
  },
  {
    key: 'startCampign',
    label:'Kampagne starten',
    icon: <BsSkipStart/> ,
    path: '/startCampaign',
  },
  {
    key: 'myCampigns',
    label:'Meine Kampagne',
    icon: <MdOutlineAccountCircle/>,
    path: '/MyCampaigns',
  },
  {
    key: 'expiredCampaigns',
    label:'Abgelaufene Kampagne',
    icon: <IoTimerOutline/>,
    path: '/ExpiredCampigns',
  },
];