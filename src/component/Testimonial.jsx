import "./Testimonial.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Motiwani R",
    country: "",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "Meghalaya was fun! Navin bhai was always proactive and planned very amazing stays. My trip was very relaxing (without tension) and was planned according to whatever things we wanted.",
    visited: "Megahalya, Shillong",
  },
  {
    id: 2,
    name: "Kanishk B",
    country: "",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    text:
      "It was an amazing trip. The stay was very comfortable and the food was delicious. I would definitely recommend this trip to my friends and family.",
    visited: "Megahalya, Shillong",
  },
  {
    id: 3,
    name: "Pawar H",
    country: "",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text:
      "It was an amazing trip. The stay was very comfortable and the food was delicious. I would definitely recommend this trip to my friends and family.",
    visited: "Tawang, Arunachal Pradesh",
  },
];

export default function Testimonials() {
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

      {/* Cards */}
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="profile">
              {/* <img src={item.image} alt={item.name} /> */}
              <div>
                <h4>{item.name}</h4>
                <span>{item.country}</span>
              </div>
            </div>

            <div className="stars">
              {"★".repeat(item.rating)}
            </div>

            <blockquote>“{item.text}”</blockquote>

            <div className="visited">
              VISITED: {item.visited}
            </div>
          </div>
        ))}
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
