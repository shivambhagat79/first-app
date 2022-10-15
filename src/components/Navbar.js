import React from "react";
import PropTypes from "prop-types";
import ColorPalette from "./ColorPalette";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  return (
    <nav
      className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${props.colorTheme}`}
          to="/first-app"
        >
          {props.title}
        </Link>
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
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/first-app"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/first-app/about"
              >
                About
              </Link>
            </li>
          </ul>
          <ColorPalette mode={props.mode} setColorTheme={props.setColorTheme} />
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label ms-1 me-3"
              htmlFor="darkModeSwitch"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "TextUtils" };
