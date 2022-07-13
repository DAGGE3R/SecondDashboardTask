import React from "react";
import "../top-stats/top-stats.styles.css";

export const TopStats = (props) => {
  return (
    <div className="top-s-container">
      <div className="right-top-props">
        <span className="title-top-s">{props.title}</span>
        <div className="price-percentage">
          <span className="price"> {props.value} </span>
          <span className="percentage"> {props.percentage} </span>
        </div>
      </div>
      <div className="icon-container-top-s">
        <div className="left-top-icon">{props.icon}</div>
      </div>
    </div>
  );
};
