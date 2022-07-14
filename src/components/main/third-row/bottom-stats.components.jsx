import React from "react";
import "./bottom-stats.styles.css";
export const BottomStatsThirdRow = (props) => {
  return (
    <div className="tr-bottom-stats-container">
      <div className="tr-upper-part">
        <div className="tr-icon-container">
          <div
            className="tr-icon"
            style={{
              background: ` ${props.bgColor}`,
            }}
          >
            {props.icon}
          </div>{" "}
        </div>
        <div className="tr-desc">
          <span> {props.desc} </span>
        </div>
      </div>
      <div className="tr-middle-part">
        <span> {props.number} </span>
      </div>
      <div className="tr-lower-part">
        <span className="tr-percentage"> {props.percentage} </span>
        <div className="meter">
          <span
            style={{
              width: `${props.percentage}`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
