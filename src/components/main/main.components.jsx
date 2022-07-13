import React from "react";
import { TopStats } from "./top-stats/top-stats.components";
import "../main/main.styles.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="top-stats-container">
        <TopStats
          title="Today's Money"
          value="$24,000"
          percentage="+2%"
          icon={<MonetizationOnIcon />}
        />
        <TopStats
          title="Today's Money"
          value="$24,000"
          percentage="+2%"
          icon={<MonetizationOnIcon />}
        />
        <TopStats
          title="Today's Money"
          value="$24,000"
          percentage="+2%"
          icon={<MonetizationOnIcon />}
        />
        <TopStats
          title="Today's Money"
          value="$24,000"
          percentage="+2%"
          icon={<MonetizationOnIcon />}
        />
      </div>
    </div>
  );
};
