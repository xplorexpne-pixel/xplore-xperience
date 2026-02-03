import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Standard "scroll to top" on route change if no hash
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // If there is a hash, attempt to scroll to the element
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                // Not found immediately? Wait for layout (common with React lazy/suspense or rapid changes)
                const timer = setTimeout(() => {
                    const retryElement = document.getElementById(id);
                    if (retryElement) {
                        retryElement.scrollIntoView({ behavior: "smooth" });
                    }
                }, 300); // 300ms delay to allow DOM to settle

                return () => clearTimeout(timer);
            }
        }
    }, [pathname, hash]);

    return null;
}
