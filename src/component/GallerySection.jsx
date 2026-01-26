import React, { useState, useEffect } from 'react';
import './GallerySection.css';
import { ArrowRight } from 'lucide-react';

// --- IMPORT YOUR LOCAL IMAGES HERE ---
// Make sure the names match your actual file names in the assets folder
import img1 from '/image/meghalaya.jpg';
import img2 from '/image/image1.jpg';
import img3 from '/image/image2.jpg';
import img4 from '/image/dzuko.jpg';
import img5 from '/image/shikkim.jpg';

const galleryImages = [
  {
    id: 1,
    url: img1, // Use the imported variable name (no quotes)
    alt: "Tropical Beach"
  },
  {
    id: 2,
    url: img2,
    alt: "Mountain Lake"
  },
  {
    id: 3,
    url: img3,
    alt: "Alpine Village"
  },
  {
    id: 4,
    url: img4,
    alt: "Cityscape"
  },
  {
    id: 5,
    url: img5,
    alt: "Desert Road"
  }
];

const GallerySection = () => {
  // ... (The rest of your component code stays exactly the same)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        
        {/* Left: Text Content */}
        <div className="gallery-content">
          <h1 className="gallery-title">
            Wonders of Travel <br />
            <span className="text-highlight">Memories Gallery</span>
          </h1>
          <p className="gallery-description">
            Explore a collection where art, design, and technology merge to shape what's next. 
            This gallery isn't just about visuals; it's about the feelings we curate for you.
          </p>
          {/* <button className="gallery-btn">
            Contact Sales <ArrowRight size={18} />
          </button> */}
        </div>

        {/* Right: Visuals */}
        <div 
          className="gallery-visuals"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Large Image */}
          <div className="main-image-wrapper">
            {galleryImages.map((image, index) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                className={`main-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
            
            <div className="image-overlay">
              <span>{galleryImages[currentIndex].alt}</span>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="thumbnail-strip">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={`thumbnail-btn ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={image.url} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GallerySection;