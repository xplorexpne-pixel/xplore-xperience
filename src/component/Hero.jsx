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
        <h1>Explore the World with Confidence</h1>
        <p>Handpicked travel experiences for real explorers.</p>
        <button
          className="btn-primary"
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
