import React from "react";
import "./sidebar.styles.css";
import Logo from "../../Assets/SoftUiLogo.png";
import { Path } from "./paths/path.component";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TableBarIcon from "@mui/icons-material/TableBar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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
        <Path title="Tables" icon={<TableBarIcon />} />
        <Path title="Billing" icon={<CreditCardIcon />} />
        <Path title="Virtual Reality" icon={<ViewInArIcon />} />
        <Path title="RTL" icon={<InsertLinkIcon />} />
      </div>
      <span className="second-title">ACCOUNT PAGES</span>
      <div className="sidebar-paths">
        <Path title="Profile" icon={<PersonIcon />} />
        <Path title="Sign in" icon={<AssignmentIndIcon />} />
        <Path title="Sign up" icon={<PersonAddIcon />} />
      </div>
    </div>
  );
};
