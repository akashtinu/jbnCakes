import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/jbn.png";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top pink-navbar">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="JBN Cakes" className="navbar-logo" />
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-center">

              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#cake" className="nav-link" onClick={() => setOpen(false)}>
                  Cakes
                </a>
              </li>

              <li className="nav-item">
                <a href="#brownie" className="nav-link" onClick={() => setOpen(false)}>
                  brownies
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
                  About
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* Floating Instagram */}
     

      <a
        href="https://www.instagram.com/jbnca_kes/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-instagram"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          bounce
          className="floating-instagram-icon"
        />
      </a>
    </>
  );
}

export default Navbar;


