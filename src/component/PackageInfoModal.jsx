import "./PackageModal.css";

export default function PackageModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Hero */}
        <div
          className="modal-hero"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="modal-hero-overlay" />
          <div className="modal-hero-content">
            <span className="badge">{data.days} Days</span>
            <span className="rating">⭐ {data.rating}</span>
            <h2>{data.title}</h2>
            <p>📍 {data.location}</p>
          </div>
        </div>

        {/* Content */}
        <div className="modal-body">
          {/* Left */}
          <div className="modal-itinerary">
            <h3>Day-by-Day Itinerary</h3>

            {data.itinerary.map((day, i) => (
              <div key={i} className="itinerary-item">
                <span className={`dot ${i === 0 ? "active" : ""}`} />
                <div>
                  <h4>{day.title}</h4>
                  <p>{day.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="modal-summary">
            <div className="summary-box">
              <h4>What’s Included</h4>
              <ul>
                {data.includes.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

              <h4>What’s Not Included</h4>
              <ul className="exclude">
                {data.excludes.map((item, i) => (
                  <li key={i}>✖ {item}</li>
                ))}
              </ul>
            </div>

            <div className="price-box">
              <p>Total Price</p>
              <h2>${data.price}</h2>
              <button>Confirm Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
