

export default function About() {
  return (
    <section className="about-page">
      {/* Intro */}
      <div className="about-hero">
        <h1>About Xplore Xperience</h1>
        <p>
          At Xplore Xperience (Xplore Xp), we believe exceptional travel begins with trust. Every journey we design is guided by an uncompromising commitment to safety, comfort, and seamless experiences—allowing you to travel with complete peace of mind.</p>
        <p>Our strength lies in our experienced team and deep local expertise. Through dedicated local language support, we break communication barriers and ensure smooth, stress-free interactions at every stage, making each trip more relaxed, informed, and enriching—regardless of destination or travel style.</p>
        <p>Our professional Tour Leaders stay ahead of every journey. By continuously monitoring road conditions, weather updates, and local developments, they make informed, real-time decisions that enhance safety while maintaining the natural flow of the experience. </p>
         <p> Whether it’s a leisure escape, cultural exploration, group tour, or a custom-designed itinerary, we manage every detail with precision and care. The result is travel that feels refined, secure, and thoughtfully curated—so you can focus on enjoying the journey</p>
      </div>

      {/* Stats Row (NOW FIRST) */}
      <div className="about-stats-row">
        <div className="stat">
          <h3>100+</h3>
          <span>Happy Travelers</span>
        </div>
        <div className="stat">
          <h3>30+</h3>
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