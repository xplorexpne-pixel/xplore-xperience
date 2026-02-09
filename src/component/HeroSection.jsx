import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [customPlace, setCustomPlace] = useState("");
  const [customDays, setCustomDays] = useState("");

  const handleCustomizeTrip = () => {
    setShowModal(true);
  };

  const handleGetInTouch = () => {
    const message = `Hi, I want a customized trip to ${customPlace} and for duration ${customDays} days.`;
    const phoneNumber = "919181317151";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
  };


  return (
    <div className="hero-container">
      <img src="/image/hero5.jpg" alt="Hero Background" className="hero-bg-img" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* <div className="hero-badge">Explore Beyond the Expected</div> */}

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Journeys Designed <br />
          to Match the Way <br />
          You Travel
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From iconic destinations to hidden escapes, Averra curates meaningful travel
          experiences tailored to your interests, pace, and comfort — so every journey feels
          effortless and unforgettable.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="hero-btn btn-primary" onClick={handleCustomizeTrip}>
            Customize Trip
          </button>
          <button className="hero-btn btn-outline" onClick={() => navigate('/packages')}>
            View Packages
          </button>
        </motion.div>


      </div>

      {/* Customize Trip Modal */}
      {showModal && (
        <div className="hero-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="hero-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="hero-modal-close-btn" onClick={() => setShowModal(false)}>×</button>
            <h3>Customize Your Trip</h3>

            <div className="hero-modal-form-group">
              <label>Destination</label>
              <input
                type="text"
                value={customPlace}
                onChange={(e) => setCustomPlace(e.target.value)}
              />
            </div>

            <div className="hero-modal-form-group">
              <label>Duration (Days)</label>
              <input
                type="number"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
                placeholder="Ex: 5"
              />
            </div>

            <button className="hero-modal-submit-btn" onClick={handleGetInTouch}>
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;