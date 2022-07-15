import React from "react";
import "./bottom-docs.styles.css";
import StarIcon from "@mui/icons-material/Star";
export const BottomDocsComponent = () => {
  return (
    <div className="bottom-container">
      <div className="bot-logo-container">
        <div className="bot-logo">
          {" "}
          <StarIcon
            style={{
              fontSize: "1.2vw",
            }}
          />{" "}
        </div>
      </div>
      <div className="bot-description">
        <span className="bot-title">Need help ?</span>
        <span>please check our docs</span>
      </div>
      <div className="bot-doc-container">Documentation</div>
    </div>
  );
};
