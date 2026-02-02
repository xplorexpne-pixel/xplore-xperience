/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function MotionButton({ children, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
