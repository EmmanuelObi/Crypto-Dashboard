import React from "react";
import "./PairDetails.css";

const PairDetails = ({ infoName, infoValue }) => {
  return (
    <div className="details">
      <span className="info-name">{infoName}</span>
      <span className="info-value">{infoValue}</span>
    </div>
  );
};

export default PairDetails;
