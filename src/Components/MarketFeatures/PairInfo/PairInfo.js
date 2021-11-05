import React from "react";
import PairDetails from "../PairDetails/PairDetails";
import "./PairInfo.css";

const PairInfo = () => {
  return (
    <div className="Pair-info">
      <div className="pair-option">
        <ul>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EOSUSDT
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/">
                  BTCUSDT
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  BTCUSDT
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  BTCUSDT
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>38,000.45</span>
          </li>
        </ul>
      </div>
      <div className="info">
        <PairDetails infoName="24hr Change" infoValue="3.77%-4.20%" />
        <PairDetails infoName="24hr High" infoValue="41,000.34" />
        <PairDetails infoName="24hr Low" infoValue="32,000.22" />
        <PairDetails infoName="24hr Volume" infoValue="19,222,343" />
        <PairDetails infoName="24hr Change" infoValue="3.77%-4.20%" />
        <PairDetails infoName="24hr Change" infoValue="3.77%-4.20%" />
        <PairDetails infoName="24hr Change" infoValue="3.77%-4.20%" />
        <PairDetails infoName="24hr Price" infoValue="34,025.56" />
      </div>
    </div>
  );
};

export default PairInfo;
