import React from "react";
import "./right-third-row.styles.css";
import chart from "../../../Assets/Graph.svg";

export const RightThirdRowComponent = (props) => {
  return (
    <div className="rtr-chart-container">
      <div className="rtr-top-stats">
        <span className="rtr-title"> {props.title} </span>
        <div className="rtr-desc-container">
          <span className="rtr-desc-icon"> {props.icon} </span>
          <span className="rtr-desc"> {props.desc} </span>
        </div>
      </div>
      <div className="rtr-chart-label-container">
        <div className="rtr-number">
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>
        <div className="rtr-chart">
          <img src={chart} alt="chart-svg" />
        </div>
      </div>
    </div>
  );
};
