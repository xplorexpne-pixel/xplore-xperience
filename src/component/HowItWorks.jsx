import { FiMapPin, FiSettings, FiCheckCircle } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-title">Booking made as easy as 1-2-3.</h2>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <FiMapPin />
          </div>
          <h3>Pick Your Destination</h3>
          <p>Explore handpicked destinations across the Philippines.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <FiSettings />
          </div>
          <h3>Customize Your Tour</h3>
          <p>Personalize your trip with stays, activities, and experiences.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <FiCheckCircle />
          </div>
          <h3>Confirm & Travel</h3>
          <p>Secure payment and instant booking confirmation.</p>
        </div>
      </div>
    </section>
  );
}
