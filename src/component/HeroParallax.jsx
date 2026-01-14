import { useEffect, useRef } from "react";
import "./HeroParallax.css";

export default function HeroParallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${
        window.scrollY * 0.3
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <div className="parallax-bg" ref={bgRef}></div>

      <div className="parallax-content">
        <h1>Curated Journeys That Stay With You.</h1>
      </div>
    </section>
  );
}
