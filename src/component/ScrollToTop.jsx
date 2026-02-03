import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Prevent browser from restoring scroll position automatically
        window.history.scrollRestoration = 'manual';
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!hash) {
                window.scrollTo(0, 0);
            } else {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    // Retry for dynamic content
                    setTimeout(() => {
                        const retryElement = document.getElementById(id);
                        if (retryElement) {
                            retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }, 500);
                }
            }
        };

        handleScroll();
    }, [pathname, hash]);

    return null;
}
