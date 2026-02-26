import React, { useState, useEffect, useRef } from 'react';
import './SmartImage.css';

const SmartImage = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        // Once in view, we don't need to observe anymore
                        // This ensures it stays "loaded" (src set) even if scrolled away
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading slightly before it enters viewport
                threshold: 0.1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            handleLoad();
        }
    }, [isInView]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            ref={containerRef}
            className={`smart-image-container ${className || ''}`}
            style={style}
            data-inview={isInView}
        >
            {!isLoaded && <div className="smart-image-placeholder" />}

            {isInView && (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className={`smart-image ${isLoaded ? 'loaded' : ''}`}
                    onLoad={handleLoad}
                    onError={handleLoad} // Prevent it from being stuck loading
                    {...props}
                />
            )}
        </div>
    );
};

export default SmartImage;
