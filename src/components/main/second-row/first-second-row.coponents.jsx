import React from "react";
import "../second-row/first-second-row.styles.css";
export const LeftSecondRowComponent = (props) => {
  return (
    <div className="left-second-row-container">
      <div className="left-part-container-sr">
        <div className="top-part-sr">
          <span className="slog-sr">{props.slog}</span>
          <span className="title-sr">{props.title}</span>
          <p className="desc-sr"> {props.desc} </p>
        </div>
        <div className="lower-part-sr">
          <span className="nav-word">{props.navigation}</span>
          <span className="nav-icon"> {props.navIcon}</span>
        </div>
      </div>
      <div className="right-part-container-sr">
        <div className="icon-sr">{props.icon}</div>
      </div>
    </div>
  );
};
