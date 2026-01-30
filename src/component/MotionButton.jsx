// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./MotionButton.css";

export default function MotionButton({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      className={`motion-btn ${className}`}
      onClick={onClick}
      whileHover={{
        y: -3,
        scale: 1.05,
        boxShadow: "0 12px 30px rgba(22,164,200,0.35)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
    >
      {children}
    </motion.button>
  );
}
