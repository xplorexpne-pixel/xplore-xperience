import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "./HeroParallax.css";

export default function HeroParallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-parallax">
      {/* Parallax Background */}
      <div
        className="hero-parallax-bg"
        ref={bgRef}
        aria-hidden="true"
      ></div>

      {/* Overlay */}
      <div className="hero-parallax-overlay"></div>

      {/* Center Text */}
      <div className="hero-parallax-center">
        <h1 className="hero-parallax-title">Xplore</h1>
        <div className="hero-parallax-glow"></div>
      </div>

      {/* Bottom Content */}
      <div className="hero-parallax-bottom">
        <div className="hero-parallax-left">
          <button className="hero-parallax-btn">
            <span>Book Now</span>
            <div className="hero-parallax-btn-icon">
              <ArrowUpRight size={20} />
            </div>
          </button>

          <p className="hero-parallax-desc">
          Handpicked destinations, transparent pricing, and stress-free trips —
          whether you’re traveling solo, with family, or as a couple.
          </p>
        </div>

        <div className="hero-parallax-more">
          <span>Explore more</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </section>
  );
}
