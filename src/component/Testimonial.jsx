import React, { useState, useRef } from 'react';
import "./Testimonial.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Motiwani R",
    country: "Delhi",
    image: "/image/motwani.jpg",
    rating: 5,
    text:
      "Meghalaya was fun! Navin bhai was always proactive and planned very amazing stays. My trip was very relaxing (without tension) and was planned according to whatever things we wanted.",
    visited: "Meghalaya, Shillong",
  },
  {
    id: 2,
    name: "Kanishk B",
    country: "Uttarakhand",
    image: "/image/kanishk.jpg",
    rating: 5,
    text:
      "My wife and I had a wonderful experience on a recent trip to Meghalaya. You were very supportive in planning and executing each day itinerary. Correct places were chosen and the trip was safe and comfortable. We give it a 5 star rating and will recommend you to others especially when it comes to the North East. Thanks for the support",
    visited: "Meghalaya, Shillong",
  },
  {
    id: 3,
    name: "Keshav S",
    country: "Kanpur, Uttar Pradesh",
    image: "/Keshav.jpeg",
    rating: 5,
    text:
      "We had an amazing experience traveling to Meghalaya with xplorexp. The trip was completely customised to our preferences, and every detail was thoughtfully planned. The locations chosen were stunning, including some beautiful detours just for scenic views that made the journey even more special. Hotels were comfortable adding to the overall experience. A special mention to the driver service, truly top quality. He was professional, friendly, and took great care of us throughout the trip, making us feel safe and relaxed at all times. Overall, it was a smooth, memorable, and well-managed trip. Highly recommended for anyone looking for a personalised and hassle-free travel experience in Meghalaya.",
    visited: "Meghalaya, Shillong",
  },
  {
    id: 4,
    name: "Jaaz Miranda",
    country: "Philippines",
    image: "/jaaz.jpeg",
    rating: 5,
    text:
      " This was my first trip to Northeast India and it was truly amazing. A friend recommended Xplorexp, and I’m so thankful because everything was well-organized and smooth. Navin was very kind and accommodating, making sure we enjoyed every moment—from the beautiful waterfalls, peaceful monasteries, and stunning lakes to the breathtaking high-altitude passes. I will definitely visit India again and highly recommend Xplorexp! 😊",
    visited: "Tawang, Arunachal",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <section className="testimonials-section">
      {/* Heading */}
      <div className="testimonials-header">
        <span className="eyebrow">SHARED JOURNEYS</span>
        <h2>What Our Travelers Say</h2>
        <p>
          Real stories from adventurers who have explored breathtaking corners
          of the world with Xplore Xperience.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="testimonials-grid desktop-only">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>

      {/* Mobile Swipe View */}
      <div
        className="testimonial-mobile-view"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mobile-testimonial-card fade" key={activeIndex}>
          <div className="mobile-profile">
            <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="mobile-profile-img" />
            <div className="mobile-profile-info">
              <h4>{testimonials[activeIndex].name}</h4>
              <span>{testimonials[activeIndex].country}</span>
            </div>
          </div>

          <div className="mobile-stars">
            {"★".repeat(testimonials[activeIndex].rating)}
          </div>

          <p className="mobile-text">
            “{testimonials[activeIndex].text}”
          </p>

          <div className="mobile-visited">
            VISITED: {testimonials[activeIndex].visited}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <div key={i} className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="testimonial-cta">
        <h3>Ready for your next adventure?</h3>
        <p>
          Join thousands of happy travelers exploring the world with us —
          from serene retreats to thrilling expeditions.
        </p>

        <div className="cta-buttons">
          <Link to="/packages" className="primary-btn">View All Packages</Link>
          <a href="https://wa.me/919181317151?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20packages." target="_blank" rel="noopener noreferrer" className="outline-btn">Contact an Expert</a>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = item.text.length > 200; // Check if text is long enough to truncate

  return (
    <div className={`testimonial-card ${isExpanded ? 'active-card' : ''}`}>
      <div className="profile">
        <img src={item.image} alt={item.name} className="profile-img" />
        <div>
          <h4>{item.name}</h4>
          <span>{item.country}</span>
        </div>
      </div>

      <div className="stars">
        {"★".repeat(item.rating)}
      </div>

      <blockquote className={isExpanded ? "expanded" : "clamped"}>
        “{item.text}”
      </blockquote>

      {isLong && (
        <button
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}

      <div className="visited">
        VISITED: {item.visited}
      </div>
    </div>
  );
};
