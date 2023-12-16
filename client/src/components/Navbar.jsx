import Avatar from "@mui/material/Avatar";
import VolunteerActivism from "@mui/icons-material/VolunteerActivism";

import React from "react";
import Button from '@mui/material/Button';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  return (
    <AppBar position="static" >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#163020"  }}>
        {/* Logo auf der linken Seite */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <VolunteerActivism/>
          <Typography variant="h6">SolidarityChain</Typography>
        </div>

        {/* Suchleiste in der Mitte */}
        <div style={{ display: "flex", alignItems: "center" }}>
            <SearchIcon />
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search", style: { color: "white" } }}
            />
        </div>

        {/* Avatar auf der rechten Seite */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="info">Kampagne Starten</Button>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
            // Hier sollte die Logik für das Öffnen des Avatar-Menüs hinzugefügt werden
          >
            <Avatar/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
