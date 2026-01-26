import { whyUsData } from "../data/whyUsData";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaClipboardList, FaHeadset } from "react-icons/fa";

export default function WhyUs() {
    return (
        <section className="why-us">

            {/* LEFT SIDE stays same */}
            <div className="why-left">
                <h2>
                    Why Travelers Choose <br />
                    <span>Xplore Xperience</span>
                </h2>
                <p>
                    From curated destinations to seamless planning, we help travelers
                    explore confidently with expert guidance.
                </p>
                <div className="social-icons">
                    <a className="icon-btn1" href="https://www.instagram.com/xplorexp/"><i className="ri-instagram-line"></i></a>
                    <a className="icon-btn1" href="https://www.facebook.com/Xplorexpne"><i className="ri-facebook-fill"></i></a>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="why-right">
                {whyUsData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="why-icon">
                                <Icon />
                            </div>

                            <div className="why-content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}
