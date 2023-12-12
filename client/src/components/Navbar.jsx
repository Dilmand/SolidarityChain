import Avatar from "@mui/material/Avatar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import React from "react";
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
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo auf der linken Seite */}
        <div className=" flex">
          <ShoppingBagIcon></ShoppingBagIcon>
          <Typography variant="h6">ShopChain</Typography>
        </div>

        {/* Suchleiste in der Mitte */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", marginRight: "10px" }}>
            <div
              className="flex items-center absolute"
              style={{ left: "-30px" }}
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search", style: { color: "white" } }}
            />
          </div>
        </div>

        {/* Avatar auf der rechten Seite */}
        <div>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
            // Hier sollte die Logik für das Öffnen des Avatar-Menüs hinzugefügt werden
          >
            <Avatar alt="Travis Howard" src="../src/assets/dilmand.jpeg" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
