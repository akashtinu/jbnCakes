import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/jbn.png";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const sections = ["home", "cakes", "brownies", "about"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const navItems = [
    { label: "Home",     id: "home" },
    { label: "Cakes & Brownies",    id: "cakes" },
    // { label: "Brownies", id: "brownies" },
    { label: "About",    id: "about" },
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top pink-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">

          <a className="navbar-brand" href="#">
            <img src={logo} alt="JBN Cakes" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>

          <div className={`navbar-collapse ${open ? "open" : ""}`}>
            <ul className="navbar-nav ms-auto text-center">
              {navItems.map(({ label, id }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeSection === id ? "active-link" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
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
        <FontAwesomeIcon icon={faInstagram} bounce className="floating-instagram-icon" />
      </a>
    </>
  );
}

export default Navbar;
