import React from "react";
import "./sidebar.styles.css";
import Logo from "../../Assets/SoftUiLogo.png";
import { Path } from "./paths/path.component";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={Logo} alt="test" />
        <span>Soft Ui Dashboard</span>
      </div>
      <hr />
      <div className="sidebar-paths">
        <Path title="Dashboard" icon={<DashboardOutlinedIcon />} />
        <Path title="Tables" icon={<DashboardOutlinedIcon />} />
        <Path title="Billing" icon={<DashboardOutlinedIcon />} />
        <Path title="Virtual Reality" icon={<DashboardOutlinedIcon />} />
        <Path title="RTL" icon={<DashboardOutlinedIcon />} />
      </div>
      <span className="second-title">ACCOUNT PAGES</span>
      <div className="sidebar-paths">
        <Path title="Profile" icon={<DashboardOutlinedIcon />} />
        <Path title="Sign in" icon={<DashboardOutlinedIcon />} />
        <Path title="Sign up" icon={<DashboardOutlinedIcon />} />
      </div>
    </div>
  );
};
