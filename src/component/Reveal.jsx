import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

export const Reveal = ({ children, width = "100%", delay = 0.25 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
            <Motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            >
                {children}
            </Motion.div>
        </div>
    );
};

export default Reveal;
