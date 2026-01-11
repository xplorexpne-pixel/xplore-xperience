import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Xplore Xperience</h2>

            <div className="nav-links">
                <NavLink to="/" end>
                    Home
                </NavLink>

                <NavLink to="/packages">
                    Packages
                </NavLink>

                <NavLink to="/About">
                    About us
                </NavLink>

                {/* { <NavLink to="/bike-rentals">
                    Bike Rentals
                </NavLink> } */}

            </div>
            <div className="Nav-left"><button className="Book-now-btn  glow-btn">Book Now</button></div>
        </nav>
    );
}
