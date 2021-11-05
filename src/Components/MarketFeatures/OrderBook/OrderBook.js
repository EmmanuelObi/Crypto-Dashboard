import React from "react";
import PriceTable from "../PriceTable/PriceTable";
import "./OrderBook.css";

const OrderBook = () => {
  return (
    <div className="order-book">
      <h1 className="me-auto px-2">Order Book</h1>
      <div className="dropdown ms-auto mx-2">
        <a
          className="btn dropdown-toggle"
          href="/"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          0.01
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="/">
              0.1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              1
            </a>
          </li>
        </ul>
      </div>
      <PriceTable pColor="red" lv="60366.66" lvColor="rgb(248, 177, 189)" />
      <PriceTable pColor="lightgreen" lv="60366.66" lvColor="lightgreen" />
    </div>
  );
};

export default OrderBook;
