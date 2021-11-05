import React from "react";
import "./Pair.css";

const Pair = ({ pairName, pairValue }) => {
  return (
    <div className="Pair">
      <span className="pair-name">{pairName}</span>
      <span className="pair-value">{pairValue}</span>
    </div>
  );
};

export default Pair;
