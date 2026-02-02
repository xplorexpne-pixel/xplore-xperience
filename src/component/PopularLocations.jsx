import React from 'react';
import { Link } from 'react-router-dom';
import './PopularLocations.css';

const locations = [
  {
    id: 1,
    name: "Megahalaya",
    image: "./image/meghalaya.jpg",
    className: "location-card large" // This one takes up the full height on the left
  },
  {
    id: 2,
    name: "Tawang ",
    image: "./image/tawang.jpg",
    className: "location-card wide"
  },
  {
    id: 3,
    name: "Shikkim",
    image: "./image/shikkim.jpg",
    className: "location-card wide"
  }
];

const PopularLocations = () => {
  return (
    <section className="popular-section">
      <div className="popular-container">

        {/* Header Text */}
        <div className="popular-header">
          <span className="subtitle">TRAVELER'S FAVOURITE</span>
          <h2 className="title">Explore All Popular <br /> Locations</h2>
          <p className="description">
            Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
          </p>
        </div>

        {/* The Grid Layout */}
        <div className="locations-grid">
          {locations.map((loc) => (
            <div key={loc.id} className={loc.className}>
              <img src={loc.image} alt={loc.name} className="bg-image" />
              <div className="popular-card-overlay">
                <h3>{loc.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mobile-cta-container">
          <Link to="/packages" className="mobile-view-all-btn">
            View All Packages
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularLocations;