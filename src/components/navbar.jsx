import React, { Component } from "react";
import "../css/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid m-0 p-0"
              src="https://res.cloudinary.com/coding-temple/image/upload/v1623699504/1623699406946_uawaml.png"
              alt=""
              width="150"
              height="125"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pe-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/story"
                >
                  <h5>Our Story</h5>
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/dogs">
                <h5>Doggy Dogz</h5>
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/sides">
                <h5>Side Pieces</h5>
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/extras">
                <h5>Exxxtras</h5>
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/beverages">
                <h5>Drank</h5>
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/contact">
                <h5>Hit us up</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
