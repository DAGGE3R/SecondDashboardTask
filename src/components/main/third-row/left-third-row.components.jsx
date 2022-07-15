import React from "react";
import "./left-third-row.styles.css";
import { BottomStatsThirdRow } from "./bottom-stats.components";
import GroupIcon from "@mui/icons-material/Group";
import MouseIcon from "@mui/icons-material/Mouse";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ReviewsIcon from "@mui/icons-material/Reviews";

export const LeftThirdRowComponent = (props) => {
  return (
    <div className="left-third-row-container">
      <div className="ltr-chart-container">
        <div className="tr-numbers">
          <span> 400 </span>
          <span> 200 </span>
          <span> 0 </span>
        </div>
        {props.chart}
      </div>
      <div className="ltr-user-stats">
        <span className="ltr-title">{props.title}</span>
        <span className="ltr-percentage">{props.percentage}</span>
      </div>
      <div className="ltr-statistics-container">
        <BottomStatsThirdRow
          percentage="60%"
          number="36K"
          bgColor="linear-gradient(120deg, rgba(234,128,252,1) 0%, rgba(106,27,154,1) 100%)"
          icon={
            <GroupIcon
              style={{
                fontSize: ".85vw",
              }}
            />
          }
          desc="Users"
        />
        <BottomStatsThirdRow
          percentage="90%"
          number="2M"
          bgColor="linear-gradient(120deg, rgba(24, 255, 255, 1) 0%, rgba(41, 121, 255, 1) 100%)"
          icon={
            <MouseIcon
              style={{
                fontSize: ".85vw",
              }}
            />
          }
          desc="Clicks"
        />
        <BottomStatsThirdRow
          percentage="30%"
          number="$435"
          bgColor="linear-gradient(120deg, rgba(255,215,64,1) 0%, rgba(230,81,0,1) 100%)"
          icon={
            <LoyaltyIcon
              style={{
                fontSize: ".85vw",
              }}
            />
          }
          desc="Sales"
        />
        <BottomStatsThirdRow
          percentage="50%"
          number="43"
          bgColor="linear-gradient(120deg, rgba(240,98,146,1) 0%, rgba(198,40,40,1) 100%)"
          icon={
            <ReviewsIcon
              style={{
                fontSize: ".85vw",
              }}
            />
          }
          desc="Reviews"
        />
      </div>
    </div>
  );
};
