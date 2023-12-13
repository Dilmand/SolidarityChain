import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import { NavBar } from "./components";
import { Sidebar } from "./components";
//import {Home, AnzeigeDetails} from "./pages";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col h-screen w-full">
        <div className="bg-white w-full ">
          <NavBar /> 
        </div>
        <div className="flex-1 p-4 bg-white">
          <Router>
          <Sidebar open={false} onClose={toggleSidebar}></Sidebar>
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
              <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/create-campaign" element={<h1>Kampagne Starten</h1>} />
              <Route path="/Anzeige/:id" element={<h1>Kampagne Infos</h1>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
