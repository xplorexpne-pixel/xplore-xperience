import { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  const statsRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counters.forEach((counter) => {
            let start = 0;
            const end = parseInt(counter.getAttribute("data-value"));
            const duration = 1500;
            const step = end / (duration / 16);

            const updateCounter = () => {
              start += step;
              if (start < end) {
                counter.innerText = Math.floor(start);
                requestAnimationFrame(updateCounter);
              } else {
                counter.innerText = end + counter.getAttribute("data-plus");
              }
            };

            updateCounter();
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <section className="about-page">

      {/* ================= HERO ================= */}
      <div className="hero-container">
        <div className="hero-overlay"></div>

        <div className="hero-card animate-fade-up">
          <h2>About Xplore Xperience</h2>
          <p>
            At Xplore Xperience (Xplore Xp), we believe travel should feel
            safe, effortless, and meaningful. Our journeys are crafted with
            care and backed by deep local expertise — ensuring you explore
            with complete peace of mind.
          </p>
          <p>
            We simplify the chaos of travel and replace it with clarity,
            comfort, and authentic experiences that stay with you forever.
          </p>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="stats-section animate-fade-up" ref={statsRef}>
        <div className="stat-box">
          <span className="stat-number" data-value="100" data-plus="+">0</span>
          <p>Happy Travelers</p>
        </div>

        <div className="stat-box">
          <span className="stat-number" data-value="30" data-plus="+">0</span>
          <p>Curated Destinations</p>
        </div>

        <div className="stat-box">
          <span className="stat-number" data-value="100" data-plus="%">0</span>
          <p>Verified Experiences</p>
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <div className="who-section animate-fade-up">
        <div className="who-left">
          <h2>Who We Are</h2>
          <p>
            Xplore Xperience was built to transform how people experience the
            Northeast. We saw travelers stuck between unreliable coordination,
            confusing options, and lack of verified partners.
          </p>

          <p>
            We created a model built on trust — verified guides, trusted
            drivers, reliable stays, and a team that monitors weather, road
            conditions, and local updates in real-time.
          </p>

          <p>
            Today, Xplore Xperience helps travelers explore safely, smoothly,
            and meaningfully — with journeys that feel authentic, enjoyable,
            and stress-free.
          </p>
        </div>

        <div className="who-right">
          <img src="/image/about.jpg" alt="Travel" />
        </div>
      </div>

      {/* ================= OUR JOURNEY ================= */}
      <div className="journey-section animate-fade-up">
        <h2>Our Journey</h2>

        <div className="journey-line">
          <div className="journey-item">
            <span className="year">2022</span>
            <p>Idea of simplifying Northeast travel was born.</p>
          </div>

          <div className="journey-item">
            <span className="year">2023</span>
            <p>Partnered with trusted drivers, guides & stays.</p>
          </div>

          <div className="journey-item">
            <span className="year">2024</span>
            <p>Crossed 500+ travelers with excellent feedback.</p>
          </div>

          <div className="journey-item">
            <span className="year">2025</span>
            <p>Expanded to more curated destinations.</p>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="why-section-cards animate-fade-up">
        <h2>Why Choose Us</h2>

        <div className="why-cards-grid">
          <div className="why-card-box">
            <h3>🌍 Curated Spots</h3>
            <p>Destinations chosen for culture, beauty & value.</p>
          </div>

          <div className="why-card-box">
            <h3>🤝 Trusted Network</h3>
            <p>Verified guides, drivers & accommodations.</p>
          </div>

          <div className="why-card-box">
            <h3>📞 24/7 Support</h3>
            <p>We stay connected throughout your trip.</p>
          </div>

          <div className="why-card-box">
            <h3>🚐 Smooth Travel</h3>
            <p>No confusion. No stress. Just seamless journeys.</p>
          </div>
        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="mission-section animate-fade-up">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make travel meaningful. We aim to transform every
          journey into an experience that feels authentic, comfortable, and
          unforgettable — guided by trust and genuine care.
        </p>

        <p>
          We believe travel is about discovery, emotion, and connection.
          Every experience we craft is designed to leave a lasting impression.
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div className="cta-section animate-fade-up">
        <Link to="/packages" className="cta-btn">
          Explore Packages
        </Link>
      </div>

    </section>
  );
}