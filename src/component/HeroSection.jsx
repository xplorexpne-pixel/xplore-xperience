import React, { useState } from 'react';
import './HeroSection.css';
import { MapPin, Calendar, Search } from 'lucide-react';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // REPLACE with your actual business phone number
    const phoneNumber = "1234567890"; 

    let message = "Hi, I am interested in booking a trip with Averra.";
    
    if (destination || date) {
      message = `Hi, I am interested in a trip to ${destination || 'a destination'} on ${date || 'a specific date'}.`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* <div className="hero-badge">Explore Beyond the Expected</div> */}
        
        <h1 className="hero-title">
          Journeys Designed <br />
          to Match the Way <br />
          You Travel
        </h1>
        
        <p className="hero-description">
          From iconic destinations to hidden escapes, Averra curates meaningful travel 
          experiences tailored to your interests, pace, and comfort — so every journey feels 
          effortless and unforgettable.
        </p>

        {/* --- Search Bar --- */}
        <div className="search-bar">
          <div className="search-input-group border-right">
            <div className="input-label">Where</div>
            <div className="input-field">
              <MapPin size={14} className="input-icon" />
              <input 
                type="text" 
                placeholder="Enter destination" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="search-input-group">
            <div className="input-label">Date</div>
            <div className="input-field">
              <Calendar size={14} className="input-icon" />
              
              {/* UPDATED INPUT: Pop-up Calendar on click */}
              <input 
                type="text" 
                placeholder="12th March, 2025" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
              />
              
            </div>
          </div>

          <button className="search-btn-circle" onClick={handleSearch}>
            <Search size={20} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;