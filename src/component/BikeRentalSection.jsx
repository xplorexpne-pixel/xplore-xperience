import React, { useState, useRef } from 'react';
import './BikeRentalSection.css';
import { ChevronLeft, ChevronRight, Gauge, Banknote, Zap } from 'lucide-react';

// Sample Data - Replace with your actual bike images and logos
const bikeData = [
  {
    id: 1,
    name: "ROYAL ENFIELD SCRAM 411",
    mileage: "29.5 kmpl",
    price: "₹1200 / Day",
    engine: "411 cc",
    description: "The Royal Enfield Scram 411 offers an ADV-crossover experience. Real-world, combined city, and highway riding typically yields excellent efficiency for long tours.",
    image: "/image/scram.png", // Placeholder bike
    logo: "/image/relogo.png" // RE Logo
  },
  {
    id: 2,
    name: "HIMALAYAN 450",
    mileage: "30 kmpl",
    price: "₹1500 / Day",
    engine: "450 cc",
    description: "Built for all roads and no roads. The Himalayan combines versatility and comfort for the ultimate off-road experience.",
    image: "/image/himalayan.png",
    logo: "/image/relogo.png"
  },
  {
    id: 3,
    name: "CLASSIC 350",
    mileage: "35 kmpl",
    price: "₹1000 / Day",
    engine: "349 cc",
    description: "The reborn Classic 350 creates a new chapter in our legacy. It keeps the timeless design while adding modern reliability.",
    image: "/image/classic350.png",
    logo: "/image/relogo.png"
  }
];
const BikeRentalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBike = bikeData[currentIndex];

  // --- WhatsApp Redirect Function ---
  const handleRentClick = () => {
    // REPLACE with your actual business phone number
    const phoneNumber = "919181317151";

    // Dynamic message including the current bike name
    const message = `Hi, I am interested in renting the ${currentBike.name}. Is it available?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };



  const handleNext = () => {
    setCurrentIndex((prev) => (prev === bikeData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bikeData.length - 1 : prev - 1));
  };

  // --- Swipe Logic ---
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    // Use changedTouches to get the finger position when it leaves the screen
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      handlePrev();
    }

    touchStartX.current = null;
  };


  return (
    <div
      className="bike-rental-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="rental-container">
        {/* --- NEW HEADER SECTION --- */}
        <div className="section-header">
          <span className="sub-heading">Choose Your Ride</span>
          <h2 className="main-heading">Bike Rental</h2>
          <div className="heading-line"></div>
        </div>

        {/* Top Content: Image & Details */}
        <div className="rental-main">

          {/* Left Side: Bike Image & Decorative Map */}
          <div className="bike-visual">
            <div className="map-bg">
              {/* Decorative SVG Path mimicking the screenshot */}
              <svg viewBox="0 0 400 300" className="deco-path">
                <path d="M50,250 C100,200 150,280 200,150 S350,50 380,50" fill="none" stroke="#E5E7EB" strokeWidth="4" strokeDasharray="10,10" />
                <circle cx="50" cy="250" r="6" fill="#D1D5DB" />
                <circle cx="200" cy="150" r="8" fill="#9CA3AF" />
                <circle cx="380" cy="50" r="6" fill="#D1D5DB" />
              </svg>
            </div>
            <img
              key={currentBike.id}
              src={currentBike.image}
              alt={currentBike.name}
              className="main-bike-img"
            />
          </div>

          {/* Right Side: Bike Details */}
          <div className="bike-details">
            <h1 className="bike-title">{currentBike.name}</h1>

            <div className="specs-list">
              <div className="spec-item">
                <Gauge size={20} className="spec-icon" />
                <span><strong>Mileage:</strong> {currentBike.mileage}</span>
              </div>
              <div className="spec-item">
                <Banknote size={20} className="spec-icon" />
                <span><strong>Price:</strong> {currentBike.price}</span>
              </div>
              <div className="spec-item">
                <Zap size={20} className="spec-icon" />
                <span><strong>Engine:</strong> {currentBike.engine}</span>
              </div>
            </div>

            <p className="bike-description">
              {currentBike.description}
            </p>

            <button className="rent-btn" onClick={handleRentClick}>
              Know More
            </button>
          </div>
        </div>

        {/* Bottom Carousel Navigation */}
        <div className="carousel-wrapper">
          <button className="nav-arrow left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>

          <div className="logo-track">
            {bikeData.map((bike, index) => (
              <div
                key={bike.id}
                className={`logo-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={bike.logo} alt="Brand Logo" />
              </div>
            ))}
            {/* Duplicating items just to fill the visual strip like the screenshot */}
            {/* <div className="logo-item grayscale"><img src={bikeData[0].logo} alt="logo" /></div>
            <div className="logo-item grayscale"><img src={bikeData[0].logo} alt="logo" /></div> */}
          </div>

          <button className="nav-arrow right" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default BikeRentalSection;