import React from "react";
import "./PTrade.css";

const PTrade = () => {
  return (
    <div className="p-trade my-1">
      <h1 className="me-auto px-2">Placed Trades</h1>
      <div className="p-rice">
        <span>0.00USDT</span>
        <span>0.00USDT</span>
      </div>
      <div className="p-rice">
        <span>0.00DOT</span>
        <span>0.00DOT</span>
      </div>
      <div className="p-rice">
        <span>0.00USDT</span>
        <span>0.00USDT</span>
      </div>
      <div className="p-rice">
        <span>0.00DOT</span>
        <span>0.00DOT</span>
      </div>
    </div>
  );
};

export default PTrade;
