import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Markets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trade
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Wallet
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Orders
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                  <span className="user-icon">
                    <i className="fas fa-user"></i>
                  </span>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Lorem
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Lorem
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Lorem
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Finance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="settings">
                    <i class="fas fa-cog"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
