import React from "react";
import "./sidebar.styles.css";
import Logo from "../../Assets/SoftUiLogo.png";
export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={Logo} alt="test" />
        <span>Soft Ui Dashboard</span>
      </div>
      <center>
        <hr />
      </center>
    </div>
  );
};
