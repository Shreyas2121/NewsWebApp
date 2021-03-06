import React, { Component } from "react";
import { Link } from "react-router-dom";

{
  /* <script src="https://cdn.tailwindcss.com"></script>; */
}

// import "./Navbar.scss";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#007FFF" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
