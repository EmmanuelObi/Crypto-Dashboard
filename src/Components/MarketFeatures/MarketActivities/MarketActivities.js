import React from "react";
import "./MarketActivities.css";

const MarketActivities = () => {
  return (
    <div className="M-activities">
      <h1 className="me-auto px-2">Market Activities</h1>
      <div className="p-b">
        <span>0.00USDT</span>
        <span>0.00USDT</span>
        <span>0.00USDT</span>
      </div>
      <div className="p-b">
        <span>0.00DOT</span>
        <span>0.00DOT</span>
        <span>0.00DOT</span>
      </div>
    </div>
  );
};

export default MarketActivities;
