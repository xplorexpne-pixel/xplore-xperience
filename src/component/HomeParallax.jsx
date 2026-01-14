import { useEffect, useRef } from "react";
import "./HomeParallax.css";

export default function HomeParallax({ children }) {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home-parallax">
      <div className="home-parallax-bg" ref={bgRef} />
      <div className="home-parallax-content">{children}</div>
    </div>
  );
}
