import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <img src="/logo/shslogo.jpeg" className="logo" /> */}
          <img
            src={`${process.env.PUBLIC_URL}/logo/shslogo.jpeg`}
            alt="logo"
            className="logo"
          />


        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          {/* <img src="/images/Banoo.png" className="topAvatar" /> */}
          <img
            src={`${process.env.PUBLIC_URL}/images/Banoo.png`}
            alt="profile"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
