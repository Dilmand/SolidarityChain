import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fest positioniert */}
      <div className="bg-green-900 w-60 flex-none">
        <Sidebar />
      </div>

      {/* Hauptcontainer für Navbar und Outlet */}
      <div className="flex-1 flex flex-col">
        {/* Navbar - fest positioniert */}
        <div className="bg-white z-10 flex-none">
          <Navbar />
        </div>
        
        {/* Outlet - Inhalt, scrollbar */}
        <div className="flex-1 bg-gray-100 overflow-y-auto py-20 px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Layout;
