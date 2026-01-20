import { useState } from "react";
import "./FeaturedPackage.css";

/* ====================== ORIGINAL DATA ====================== */
const packages = [
  {
    id: 1,
    title: "Xplore Xperience",
    days: "6D / 5N",
    popular: true,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Discover the enchanting beauty of Northeast India with hand-crafted travel experiences.",
    big: true,
  },
  {
    id: 2,
    title: "Majuli River Cruise",
    days: "6D / 5N",
    popular: true,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Majuli island adventures, riverside serenity and rich Assamese culture.",
    big: false,
  },
  {
    id: 3,
    title: "Dzukou Valley Trek",
    days: "4D / 3N",
    popular: true,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Cloud-covered green valleys and unforgettable mountain landscapes.",
    big: false,
  },
];

/* ====================== EXPLORE DATA ====================== */
const explorePackages = [
  {
    id: 1,
    title: "Tawang & Shergaon",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Tawang & Sangti valley",
    region: "Arunachal",
    duration: "7D / 6N",
    desc: "Explore snow valleys, monasteries and mountain roads.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 3,
    title: "Tawang & kaziranga",
    region: "Arunachal",
    duration: "4D / 3N",
    desc: "Walk across natural bridges hidden in the forests.",
    image: "https://images.unsplash.com/photo-1617196034798-d42163fdc82a",
  },
    {
    id: 4,
    title: "Tawang",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 5,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 6,
    title: "Kibithu & Dong",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 7,
    title: "Kaziranga National Park",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 8,
    title: "Sivasagar",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 9,
    title: "Dima Hasao",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 10,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "3D / 2N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 11,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "5D / 4N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 12,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 13,
    title: "Sikkim",
    region: "Sikkim",
    duration: "5D / 4N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 14,
    title: "Sikkim",
    region: "Sikkim",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 15,
    title: "Sikkim",
    region: "Sikkim",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 16,
    title: "Dzukou Valley",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 17,
    title: "Hornbill Festival",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 18,
    title: "Mon & Longwa",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const exploreRegions = [
  "All Packages",
  "Arunachal",
  "Assam",
  "Meghalaya",
  "Sikkim",
  "Nagaland",
  "Manipur",
  "Tripura",
];

/* ====================== MAIN COMPONENT ====================== */
export default function FeaturedPackage() {
  const [activeRegion, setActiveRegion] = useState("All Packages");

  return (
    <>
      {/* ================= TOP BRANDING + SEARCH ================= */}
      <div className="brand-header">
        <h1 className="brand-title">Xplore Xperience</h1>
        <p className="brand-sub">Discover the Enchanting Northeast India</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search State or package..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
      {/* ====================== EXISTING FEATURED SECTION ====================== */}
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
      </section>

      {/* ====================== NEW EXPLORE SECTION ====================== */}
      <section className="explore-section">
        {/* FILTER BAR */}
        <div className="explore-filter">
          {exploreRegions.map((region) => (
            <button
              key={region}
              className={`explore-pill ${activeRegion === region ? "active" : ""
                }`}
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="explore-grid">
          {(activeRegion === "All Packages"
            ? explorePackages
            : explorePackages.filter((p) => p.region === activeRegion)
          ).map((pkg) => (
            <div className="explore-card" key={pkg.id}>
              <div
                className="explore-card-img"
                style={{ backgroundImage: `url(${pkg.image})` }}
              ></div>

              <div className="explore-card-info">
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
