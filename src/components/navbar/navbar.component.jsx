import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import SearchIcon from "@mui/icons-material/Search";
import "./navbar.styles.css";
export const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="dashboard">
        <div className="top-part">
          <HomeIcon />
          <span>/</span>
          <span>Dashboard</span>
        </div>
        <span>Dashboard</span>
      </div>
      <div className="right-part">
        <div className="search-bar">
          <TextField
            label="Type Here..."
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="icons-nav">
          <div className="sign-in">
            <AccountCircleIcon />
            <span>sign in </span>
          </div>
          <SettingsIcon className="item" />
          <NotificationsIcon className="item" />
        </div>
      </div>
    </div>
  );
};
