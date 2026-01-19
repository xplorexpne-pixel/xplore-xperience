import { useState } from "react";
import PackageModal from "../component/PackageModal";
import "./FeaturedPackage.css";

const packages = [
  {
    id: 1,
    title: "Xplore Xperience",
    days: "6D / 5N",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Discover the enchanting beauty of Northeast India with hand-crafted travel experiences.",
    big: true,
  },
  {
    id: 2,
    title: "Majuli River Cruise",
    days: "6D / 5N",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Majuli island adventures, riverside serenity and rich Assamese culture.",
    big: false,
  },
  {
    id: 3,
    title: "Dzukou Valley Trek",
    days: "4D / 3N",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Cloud-covered green valleys and unforgettable mountain landscapes.",
    big: false,
  },
];

export default function PackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      {/* ⭐ TOP BRAND HEADER ⭐ */}
      <div className="brand-header">
        <h1 className="brand-title">Xplore Xperience</h1>
        <p className="brand-tagline">
          Discover the Enchanting Northeast India
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search State or package..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* ⭐ ORIGINAL PACKAGE SECTION (UNCHANGED) ⭐ */}
      <section className="featured-section">
        <div className="featured-grid">

          {/* BIG CARD */}
          <article
            className="package-card big"
            style={{ backgroundImage: `url(${packages[0].image})` }}
          >
            <div className="card-tags">
              <span className="tag days">{packages[0].days}</span>
              <span className="tag popular">Popular</span>
            </div>

            <h2 className="card-title">{packages[0].title}</h2>

            <div className="card-overlay">
              <p>{packages[0].description}</p>
              <button>Book Now</button>
            </div>
          </article>

          {/* SMALL CARDS */}
          <div className="small-card-wrap">
            {packages.slice(1).map((item) => (
              <article
                key={item.id}
                className="package-card small"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="card-tags">
                  <span className="tag days">{item.days}</span>
                  <span className="tag popular">Popular</span>
                </div>

                <h2 className="card-title">{item.title}</h2>

                <div className="card-overlay">
                  <p>{item.description}</p>
                  <button>Book Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <PackageModal
          isOpen={isModalOpen}
          data={selectedPackage}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </>
  );
}
