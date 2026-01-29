import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Motiwani R",
    country: "",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "The Kyoto experience was absolutely serene and life-changing. Every detail, from the hidden shrines to the tea ceremonies, was Meghalaya was fun! Navin bhai was always proactive and planned very amazing stays. My trip was very relaxing (without tension) and was planned according to whatever things we wanted.",
    visited: "Megahalya, Shillong",
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    text:
      "An unforgettable adventure in Tanzania. The safari was perfectly organized, and our guide had an incredible eye for wildlife.",
    visited: "Serengeti, Tanzania",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    country: "Spain",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text:
      "The coastal retreat in Greece was pure luxury. Waking up to the Aegean Sea felt unreal. I’m already planning my next trip.",
    visited: "Santorini, Greece",
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
          <button className="primary-btn">View All Packages</button>
          <button className="outline-btn">Contact an Expert</button>
        </div>
      </div>
    </section>
  );
}
