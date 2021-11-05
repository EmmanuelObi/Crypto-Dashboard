import React from "react";
import "./BottomTable.css";

const BottomTable = () => {
  return (
    <div className="bottom-table p-2">
      <thead>
        <th>Date</th>
        <th>Pair</th>
        <th>Type</th>
        <th>Side</th>
        <th>Average</th>
        <th>Price</th>
        <th>Executed</th>
        <th>Amount</th>
        <th>Total</th>
        <th>Trigger</th>
      </thead>
      <tbody>No Order History</tbody>
    </div>
  );
};

export default BottomTable;
