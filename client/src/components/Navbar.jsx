import React, {useContext} from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {ContractContext} from "../context/ContractContext";

const Navbar = () => {
  const {connectWallet, currentAccount} = useContext(ContractContext)

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/StartCampaign')
  }
  return (
    <div
      className="flex items-center p-0.1 bg-white"
    >
      <div className="flex-0 items-center">
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      {/* Platzhalter Element für die Ausrichtung */}
      <div className="flex-1" />

      {/* Sucheingabe auf der rechten Seite */}
      <Button variant="contained" color="success" style={{margin:10}} onClick={handleOnClick}>
        Kampagne starten
      </Button>
      {!currentAccount&&
      <IconButton edge="start" color="inherit" aria-label="open profile" onClick={connectWallet}>
        <MdOutlineAccountCircle size="2em" />
      </IconButton>
}
    </div>
  );
};

export default Navbar;
