import React from "react";
import "./path.styles.css";

export const Path = (props) => {
  return (
    <div className="path-container">
      <div className="icon-container">
        <div className="icon">{props.icon}</div>
      </div>
      <span>{props.title}</span>
    </div>
  );
};
