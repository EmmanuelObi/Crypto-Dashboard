import React from "react";
import Pair from "../Pair/Pair";
import "./Pairs.css";

const Pairs = () => {
  return (
    <div className="Pairs">
      <Pair pairName="EOSUSDT" pairValue="+0.54%" />
      <Pair pairName="BTCUSDT" pairValue="+5.81%" />
      <Pair pairName="NGNUSDT" pairValue="+0.54%" />
      <Pair pairName="EOSUSDT" pairValue="+0.54%" />
      <Pair pairName="EOSUSDT" pairValue="+0.54%" />
      <Pair pairName="EOSUSDT" pairValue="+0.54%" />
    </div>
  );
};

export default Pairs;
