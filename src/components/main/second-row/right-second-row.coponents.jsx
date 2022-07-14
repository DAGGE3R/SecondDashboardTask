import React from "react";
import "../second-row/right-second-row.styles.css";

export const RightSecondRowComponent = (props) => {
  return (
    <div className="right-second-row-container">
      <div className="rsr-bg-image">
        <div className="top-part-rsr">
          <span className="title-rsr"> {props.title} </span>
          <p className="desc-rsr"> {props.desc} </p>
        </div>
        <div className="lower-part-rsr">
          <span className="nav-word-rsr">{props.navigation}</span>
          <span className="nav-icon-rsr"> {props.navIcon}</span>
        </div>
      </div>
    </div>
  );
};
