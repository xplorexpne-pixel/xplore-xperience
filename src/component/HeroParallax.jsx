import { useEffect, useRef } from "react";
import "./HeroParallax.css";
import AnimatedText from "./AnimatedText";

export default function HeroParallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.3
        }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <div className="parallax-bg" ref={bgRef}></div>

      <div className="parallax-overlay"></div>

      <div className="parallax-content">
        <span className="Parahero-badge">
          ⭐ Voted best peaceful place in the world
        </span>

        <AnimatedText as="h1">
          Journeys That Stay With You.
        </AnimatedText>

        <AnimatedText as="p">
          Handpicked travel experiences crafted with local expertise,
          transparent pricing, and full journey support.
        </AnimatedText>
      </div>
    </section>
  );
}
