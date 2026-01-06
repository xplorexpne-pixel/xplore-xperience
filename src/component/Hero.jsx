import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        {/* <h1>Explore the World with Confidence</h1> */}
        <p>Travel isn’t just about places — it’s about moments.
           Discover thoughtfully designed journeys that stay with you forever.</p>


        <button
          className="hero-btn"
          onClick={() =>
            document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Packages
        </button>
      </div>
    </motion.section>
  );
}
