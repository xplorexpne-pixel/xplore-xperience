import React, { useState, useEffect, useRef } from 'react';
import './SmartImage.css';

const SmartImage = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            className={`smart-image-container ${className || ''}`}
            style={style}
        >
            {!isLoaded && <div className="smart-image-placeholder" />}

            <img
                src={src}
                alt={alt}
                className={`smart-image ${isLoaded ? 'loaded' : ''}`}
                onLoad={handleLoad}
                onError={handleLoad} // Prevent it from being stuck loading
                {...props}
            />
        </div>
    );
};

export default SmartImage;
