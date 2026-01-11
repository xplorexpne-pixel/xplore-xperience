export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* LEFT CONTENT */}
        <div className="cta-left">
          <h2>
            Start your journey today and see why thousands of travelers choose
            <span> Xplore Xperience</span> to explore the beauty of the
            Tawang Aurnachal Pradesh.
          </h2>

          <button className="cta-btn">Book now</button>

          <p className="cta-note">
            It’s time to stop daydreaming and start traveling. At Xplore
            Xperience, we turn your vacation goals into experiences.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cta-right">
          <img
            src="/image/CtaBanner.jpg"
            alt="Travel group adventure"
          />
        </div>

      </div>
    </section>
  );
}
