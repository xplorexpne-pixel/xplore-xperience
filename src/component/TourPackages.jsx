import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Packages from '../Pages/Package';
const TourPackages = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const packages = [
    {
      id: 1,
      title: 'Island Hopper Adventure',
      description: 'Hop from island to island with boat tours, guided snorkeling and a sunset cruise.',
      image: '/image/image1.jpg',
    },
    {
      id: 2,
      title: 'Northern Highland Escape',
      description: 'Experience the cool breeze of the mountains and Sagano with scenic views, hiking trips and local art.',
      image: '/image/image2.jpg',
    },
  ];

  return (
    <section className="tour-packages">
      <div className="Tour-packages-container">
        {/* Left Section */}
        <div className="Tour-packages-content">
          <h2>Tour Packages</h2>
          <p>Explore customizable and unforgettable adventures</p>
          <button
            className="browse-btn"
            onClick={() => navigate('/Packages')} // Add navigation on click
          >
            Browse all packages
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="Tour-packages-cards">
          {packages.map((pkg) => (
            <div key={pkg.id} className="Tour-package-card">
              <img src={pkg.image} alt={pkg.title} />
              <div className="Tour-package-info">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
