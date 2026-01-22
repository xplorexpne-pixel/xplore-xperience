import { useState, useRef, useEffect } from "react";
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
    title: "Mesmerising Assam",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Mesmerising Assam: Wild & Heritage (wildlife at Kaziranga + heritage Sivasagar + cultural Majuli).",
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
    duration: "7D / 6N",
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
    title: "Kohima",
    region: "Nagaland",
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
 {
    id: 19,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "5D / 4N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  }, 
  {
    id: 20,
    title: "Zero",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 21,
    title: "Dambuk",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 22,
    title: "Orange Festival",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Experience the calm and culture of the world’s largest river island.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 23,
    title: "Eastern Arunachal",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Eastern Arunachal Highlights: Parshuramkund, Namsai Pagoda, Roing & Dambuk",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
   {
    id: 24,
    title: "Parshuramkund",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Eastern Arunachal Highlights: Parshuramkund, Namsai Pagoda, Roing & Dambuk",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 25,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "8D / 7N",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeRegion, setActiveRegion] = useState("All Packages");

  // ⭐ NEW: ref for search area
  const searchRef = useRef(null);

  // ⭐ NEW: CLOSE suggestions on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]); // close popup
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ================= TOP BRANDING + SEARCH ================= */}
      <div className="brand-header">
        <h1 className="brand-title">Xplore Xperience</h1>
        <p className="brand-sub">Discover the Enchanting Northeast India</p>

        {/* ⭐ searchRef wraps full search area */}
        <div className="search-bar" ref={searchRef}>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search State or package..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);

                if (value.trim().length > 0) {
                  const filtered = explorePackages.filter((pkg) =>
                    pkg.title.toLowerCase().includes(value.toLowerCase()) ||
                    pkg.region.toLowerCase().includes(value.toLowerCase())
                  );
                  setSuggestions(filtered.slice(0, 5));
                } else {
                  setSuggestions([]);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSuggestions([]);
                  setActiveRegion("All Packages");
                }
              }}
            />

            <button
              className="search-btn"
              onClick={() => {
                setActiveRegion("All Packages");
                setSuggestions([]);
              }}
            >
              Search
            </button>

            {/* ⭐ SEARCH SUGGESTIONS DROPDOWN */}
            {suggestions.length > 0 && (
              <div className="search-suggestions">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => {
                      setSearchQuery(item.title);
                      setSuggestions([]);
                      setActiveRegion("All Packages");
                    }}
                  >
                    <span className="suggestion-title">{item.title}</span>
                    <span className="suggestion-region">{item.region}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ⭐ REST OF YOUR CODE — COMPLETELY UNCHANGED ⭐ */}
      {/* Featured + Explore Sections remain exactly same */}

      <section className="featured-section">
        <div className="featured-grid">
          <article
            className="featured-package-card big"
            style={{ backgroundImage: `url(${packages[0].image})` }}
          >
            <div className="featured-card-tags">
              <span className="tag days">{packages[0].days}</span>
              <span className="tag popular">Popular</span>
            </div>
            <h2 className="featured-card-title">{packages[0].title}</h2>
            <div className="featured-card-overlay">
              <p>{packages[0].description}</p>
              <button>Book Now</button>
            </div>
          </article>

          <div className="small-card-wrap">
            {packages.slice(1).map((item) => (
              <article
                key={item.id}
                className="featured-package-card small"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="featured-card-tags">
                  <span className="tag days">{item.days}</span>
                  <span className="tag popular">Popular</span>
                </div>
                <h2 className="featured-card-title">{item.title}</h2>
                <div className="featured-card-overlay">
                  <p>{item.description}</p>
                  <button>Book Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-section">
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
          {explorePackages
            .filter((pkg) => {
              const matchRegion =
                activeRegion === "All Packages" || pkg.region === activeRegion;

              const matchSearch =
                searchQuery.trim() === "" ||
                pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pkg.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pkg.duration.toLowerCase().includes(searchQuery.toLowerCase());

              return matchRegion && matchSearch;
            })
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((pkg) => (
              <div className="explore-card" key={pkg.id}>
                <span className="explore-duration-badge">{pkg.duration}</span>

                <div
                  className="explore-card-img"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                ></div>

                <div className="explore-card-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>

                  <button
                    className="explore-book-btn"
                    onClick={() => {
                      const msg = `Hey! 
I am interested in this package :-

• Package: ${pkg.title}
• Region: ${pkg.region}
• Duration: ${pkg.duration}

Please share more details.`;

                      window.open(
                        `https://wa.me/919181317151?text=${encodeURIComponent(msg)}`,
                        "_blank"
                      );
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
