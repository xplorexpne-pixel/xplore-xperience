

export default function About() {
  return (
    <section className="about-page">
      {/* Intro */}
      <div className="about-hero">
        <h1>About Xplore Xperience</h1>
        <p>
          We design handpicked travel experiences for explorers who want to
          travel with confidence, comfort, and authenticity.
        </p>
      </div>

      {/* Stats Row (NOW FIRST) */}
      <div className="about-stats-row">
        <div className="stat">
          <h3>500+</h3>
          <span>Happy Travelers</span>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <span>Curated Destinations</span>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <span>Verified Experiences</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="about-text">
        <h2>Who We Are</h2>
        <p>
          Xplore Xperience was built for travelers who believe journeys should
          feel personal, not packaged. We focus on meaningful destinations,
          verified guides, and carefully planned experiences.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple — to remove uncertainty from travel and replace
          it with trust, clarity, and unforgettable memories.
        </p>
      </div>
    </section>
  );
}