import { NavLink } from "react-router-dom";
import { useState } from "react";
import MotionButton from "./MotionButton";
// import logo from "/image/logo.png"; // adjust path if needed
import "./Navbar.css";
import "./Navbar.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [customPlace, setCustomPlace] = useState("");
    const [customDays, setCustomDays] = useState("");

    const handleGetInTouch = () => {
        const message = `Hi, I want a customized trip to ${customPlace} and for duration ${customDays} days.`;
        const whatsappUrl = `https://wa.me/919181317151?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setShowModal(false);
    };


    return (
        <>
            <nav className="navbar">

                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <img src="/image/logo.png" alt="Xplore Xperience Logo" />
                    <span>Xplore Xperience</span>
                </NavLink>

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
                    <MotionButton
                        className="Book-now-btn glow-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Customize Trip
                    </MotionButton>
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

            {/* Customize Trip Modal */}
            {showModal && (
                <div className="navbar-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="navbar-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="navbar-modal-close-btn" onClick={() => setShowModal(false)}>×</button>
                        <h3>Customize Your Trip</h3>

                        <div className="navbar-modal-form-group">
                            <label>Destination</label>
                            <input
                                type="text"
                                value={customPlace}
                                onChange={(e) => setCustomPlace(e.target.value)}
                            />
                        </div>

                        <div className="navbar-modal-form-group">
                            <label>Duration (Days)</label>
                            <input
                                type="number"
                                value={customDays}
                                onChange={(e) => setCustomDays(e.target.value)}
                                placeholder="Ex: 5"
                            />
                        </div>

                        <button className="navbar-modal-submit-btn" onClick={handleGetInTouch}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}