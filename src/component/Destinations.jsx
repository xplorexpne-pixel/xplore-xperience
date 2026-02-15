
import { destinations } from "../data/DestinationCardData";
import { useState } from "react";
import SmartImage from "./SmartImage";
export function DestinationCard({ item }) {
  if (!item) return null;

  return (
    <div className="destination-card">
      <SmartImage
        src={item.image}
        alt={item.title}
        className="card-image"
      />

      {/* <div className="price-badge">
        starts at {item.price}
      </div> */}

      <div className="card-overlay">
        <h3>{item.title}</h3>
        <p className="tagline">{item.tagline}</p>

        <div className="card-meta">
          {/* <span>⭐ {item.rating} ({item.reviews})</span> */}
          <span>📍 {item.location}</span>
        </div>
      </div>
    </div>
  );
}


export default function Destinations() {
  const [currentIndex] = useState(0); // eslint-disable-line no-unused-vars
  const cardsPerView = 4;
  // const maxIndex = Math.max(0, destinations.length - cardsPerView);

  // const handlePrev = () => {
  //   setCurrentIndex((prev) => Math.max(0, prev - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  // };

  const visibleCards = destinations.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="destination-section">
      <div className="destination-wrapper">
        <h2 className="section-title">Popular Destinations</h2>

        <div className="slider-container">


          <div className="destination-panel">
            {visibleCards.map((item) => (
              <DestinationCard key={item.id} item={item} />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}