import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Traveller
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinationreview">
                  Destination Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/summaryrev">
                  Summary
                </Link>
              </li>

              <li className="nav-item border-1 ">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
