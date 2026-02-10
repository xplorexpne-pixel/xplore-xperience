import { motion as Motion } from "framer-motion";

export default function AnimatedText({
  as: Tag = "h1",

  children,
  delay = 0,
}) {
  const _ = Tag;
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <Tag>{children}</Tag>
    </Motion.div>
  );
}
