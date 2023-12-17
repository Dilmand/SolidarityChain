import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { NavBar, Sidebar, Layout } from "./components";

import { Home, CampaignDetailsPage, StartCampign, MyCampaings } from "./pages";
import Box from "@mui/material/Box";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/StartCampaign" element={<StartCampign/>}/>
          <Route path="/MyCampaigns" element={<MyCampaings/>}/>
          <Route path="/CampaignDetails/:id" element={<CampaignDetailsPage/>}/>
        </Route>
      </Routes>
    </Router>

  );
};

export default App;
