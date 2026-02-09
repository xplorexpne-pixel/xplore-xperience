import React, { useState } from 'react';
import './PopularLocations.css';

const locations = [
  {
    id: 1,
    name: "Meghalaya",
    image: "/image/meghalaya.jpg",
    className: "location-card large" // This one takes up the full height on the left
  },
  {
    id: 2,
    name: "Tawang",
    image: "/image/tawang.jpg",
    className: "location-card wide"
  },
  {
    id: 3,
    name: "Sikkim",
    image: "/image/sikkim.jpg",
    className: "location-card wide"
  }
];

const PopularLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [customName, setCustomName] = useState("");
  const [customDays, setCustomDays] = useState("");

  const openModal = (loc) => {
    setSelectedLocation(loc);
    setCustomName(loc.name);
    setCustomDays("");
  };

  const closeModal = () => {
    setSelectedLocation(null);
  };

  const handleGetInTouch = () => {
    const message = `Hi, I want a customized trip to ${customName} and for duration ${customDays} days.`;
    const whatsappUrl = `https://wa.me/919181317151?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeModal();
  };

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
              <img src={loc.image} alt={loc.name} className="bg-image" loading="lazy" />
              <div className="popular-card-overlay">
                <h3>{loc.name}</h3>
                <button
                  className="customize-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(loc);
                  }}
                >
                  Customize Trip
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>
      {/* Customize Trip Modal */}
      {selectedLocation && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            <h3>Customize Your Trip</h3>

            <div className="modal-form-group">
              <label>Destination</label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
              />
            </div>

            <div className="modal-form-group">
              <label>Duration (Days)</label>
              <input
                type="number"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
                placeholder="Ex: 5"
              />
            </div>

            <button className="modal-submit-btn" onClick={handleGetInTouch}>
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularLocations;