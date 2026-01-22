import { NavLink } from "react-router-dom";
import { useState } from "react";
import MotionButton from "./MotionButton";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);


    return (
        <>
            <nav className="navbar">

                <h2 className="logo">Xplore Xperience</h2>

                {/* NAV LINKS */}
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

                {/* BOOK NOW (Desktop Only) */}
                <div className="Nav-left">
                    <MotionButton className="Book-now-btn glow-btn">Book Now</MotionButton>
                </div>

                {/* HAMBURGER (open + close) */}
                <button
                    className={`hamburger-menu ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* OVERLAY */}
            {menuOpen && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}
        </>
    );
}