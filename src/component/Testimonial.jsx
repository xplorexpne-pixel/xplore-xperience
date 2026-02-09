import "./Testimonial.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Motiwani R",
    country: "",
    image: "/image/motwani.jpg",
    rating: 5,
    text:
      "Meghalaya was fun! Navin bhai was always proactive and planned very amazing stays. My trip was very relaxing (without tension) and was planned according to whatever things we wanted.",
    visited: "Megahalya, Shillong",
  },
  {
    id: 2,
    name: "Kanishk B",
    country: "",
    image: "/image/kanishk.jpg",
    rating: 5,
    text:
      "My wife and me had a wonderful experience on a recent trip to Meghalaya. You were very supportive in planning and executing each day itinerary. Correct places were chosen and the trip was safe and comfortable. We give it a 5 star rating and will recommend you to others especially when it comes to the North East. Thanks for the support",
    visited: "Meghalaya, Shillong",
  },
  {
    id: 3,
    name: "Keshav S",
    country: "",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text:
      "We had an amazing experience traveling to Meghalaya with xplorexp. The trip was completely customised to our preferences, and every detail was thoughtfully planned. The locations chosen were stunning, including some beautiful detours just for scenic views that made the journey even more special. Hotels were comfortable adding to the overall experience. A special mention to the driver service, truly top quality. He was professional, friendly, and took great care of us throughout the trip, making us feel safe and relaxed at all times. Overall, it was a smooth, memorable, and well-managed trip. Highly recommended for anyone looking for a personalised and hassle-free travel experience in Meghalaya.",
    visited: "Meghalaya",
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
              <img src={item.image} alt={item.name} className="profile-img" />
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
