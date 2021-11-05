import React from "react";
import BottomLead from "../MarketFeatures/BottomLead/BottomLead";
import BottomTable from "../MarketFeatures/BottomTable/BottomTable";
import Chart from "../MarketFeatures/Chart/Chart";
import MarketActivities from "../MarketFeatures/MarketActivities/MarketActivities";
import OrderBook from "../MarketFeatures/OrderBook/OrderBook";
import OrderTable from "../MarketFeatures/OrderTable/OrderTable";
import PairInfo from "../MarketFeatures/PairInfo/PairInfo";
import Pairs from "../MarketFeatures/Pairs/Pairs";
import PTrade from "../MarketFeatures/PTrade/PTrade";
import TradeTab from "../MarketFeatures/TradeTab/TradeTab";
import "./Market.css";

const Market = () => {
  return (
    <div className=" market py-1 m-0 p-0">
      <div className="left ">
        <div className="col-">
          <Pairs />
        </div>
        <div className="col- my-1 mx-0">
          <PairInfo />
        </div>
        <div className="col- my-1 mx-0">
          <Chart />
        </div>
      </div>
      <div className="right  m-0 p-0">
        <div className="right-1 col-lg-6">
          <OrderBook />
          <OrderTable />
        </div>
        <div className="col-lg-6 right-2">
          <TradeTab />
          <PTrade />
        </div>
      </div>
      <div className="bottom col-md-12">
        <div className="b-left">
          <BottomLead />
          <BottomTable />
        </div>
        <div className="b-right">
          <MarketActivities />
        </div>
      </div>
    </div>
  );
};

export default Market;
