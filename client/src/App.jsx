import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { NavBar } from "./components";
import { Sidebar } from "./components";
import { Home, AnzeigeDetails } from "./pages";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-60"> {/* ml-60 sorgt dafür, dass der Hauptinhalt neben der Sidebar startet */}
        <NavBar />
        <div className="p-4 overflow-auto">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Anzeige/:id" element={<AnzeigeDetails />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
