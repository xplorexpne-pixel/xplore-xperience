/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      icon: "🌍",
      title: "Expert Local Guides",
      desc: "Travel with guides who know the land like the back of their hand.",
    },
    {
      icon: "🏨",
      title: "Handpicked Stays",
      desc: "From luxury resorts to cozy homestays, we pick only the best.",
    },
    {
      icon: "🚐",
      title: "Seamless Transport",
      desc: "Comfortable and safe rides for every part of your journey.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "We are always just a call away, ensuring a hassle-free trip.",
    },
  ];

  return (
    <section className="why-us">
      <div className="why-header">
        <h2>Why Choose Xplore Xperience?</h2>
        <p>Because every journey should be as unique as you are.</p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
