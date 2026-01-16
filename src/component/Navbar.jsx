import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">Xplore Xperience</h2>

      {/* NAV LINKS + CLOSE BUTTON INSIDE */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>


        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/packages" onClick={() => setMenuOpen(false)}>
          Packages
        </NavLink>

        <NavLink to="/About" onClick={() => setMenuOpen(false)}>
          About us
        </NavLink>
      </div>

      {/* BOOK NOW (DESKTOP ONLY) */}
      <div className="Nav-left">
        <button className="Book-now-btn glow-btn">Book Now</button>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        className="hamburger-menu"
        onClick={() => setMenuOpen(true)}
      >
        <i className="ri-menu-line"></i>
      </button>

    </nav>
  );
}