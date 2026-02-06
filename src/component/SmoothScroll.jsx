import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }) {
    const [lenis, setLenis] = useState(null)
    const { pathname, hash } = useLocation()

    useEffect(() => {
        const newLenis = new Lenis({
            duration: 2.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })
        // Use setTimeout to avoid synchronous state update warning
        setTimeout(() => setLenis(newLenis), 0);

        function raf(time) {
            newLenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            newLenis.destroy()
            setLenis(null)
        }
    }, [])

    // Handle Scroll to Top & Hash Navigation
    useEffect(() => {
        if (!lenis) return;

        if (hash) {
            // Allow time for layout to settle if needed, or scroll immediately
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    lenis.scrollTo(element, { offset: -100 })
                }
            }, 100);
        } else {
            lenis.scrollTo(0, { immediate: true })
        }
    }, [pathname, hash, lenis])

    return <>{children}</>
}
