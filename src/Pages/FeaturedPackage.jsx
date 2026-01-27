
import { useState, useRef, useEffect } from "react";
import "./FeaturedPackage.css";

/* ====================== ORIGINAL DATA ====================== */
const packages = [
  {
    id: 1,
    title: "Tawang",
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
    desc: "A serene journey through Shergaon’s tribal valleys and Tawang’s iconic monasteries. Perfect blend of culture, scenery and high-altitude charm.",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
  },
  {
    id: 2,
    title: "Tawang & Sangti valley",
    region: "Arunachal",
    duration: "7D / 6N",
    desc: "Explore Tawang’s heritage and Sangti’s peaceful riverside landscapes. Snow peaks, quiet villages and panoramic drives await.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "Tawang & kaziranga",
    region: "Arunachal",
    duration: "4D / 3N",
    desc: "A unique blend of Tawang’s spiritual beauty and Kaziranga’s wildlife thrills. Experience monasteries, mountains and wild one-horned rhinos.",
    image: "https://images.unsplash.com/photo-1602620502220-1796e0e0a6f3",
  },
  {
    id: 4,
    title: "Tawang",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Discover Tawang’s ancient monasteries, high passes and alpine lakes. A peaceful escape into Arunachal’s Buddhist heartland.",
    image: "https://images.unsplash.com/photo-1574781330856-5d3a3d93f740",
  },
  {
    id: 5,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A hidden valley of wooden houses, rivers and untouched landscapes. Mechuka offers raw beauty and a quiet Himalayan experience.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 6,
    title: "Kibithu & Dong",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Visit India’s easternmost points known for sunrise views and remote mountain life. A rare offbeat journey into untouched Arunachal.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 7,
    title: "Kaziranga National Park",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Home to the world-famous one-horned rhinos and lush floodplains. Perfect for jeep safaris, wildlife spotting and nature lovers.",
    image: "https://images.unsplash.com/photo-1602620502220-1796e0e0a6f3",
  },
  {
    id: 8,
    title: "Mesmerising Assam",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Experience the best of Assam—wildlife, culture and heritage. From Kaziranga’s jungles to Majuli’s traditions, it’s the perfect mix.",
    image: "https://images.unsplash.com/photo-1496042399019-ab14cb5616d6",
  },
  {
    id: 9,
    title: "Dima Hasao",
    region: "Assam",
    duration: "6D / 5N",
    desc: "A scenic hill district known for pine forests, waterfalls and peaceful villages. Ideal for slow travel and nature escapes.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 10,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "7D / 6N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f5",
  },
  {
    id: 11,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "5D / 4N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f5",
  },
  {
    id: 12,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "6D / 5N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f5",
  },
  {
    id: 13,
    title: "Sikkim",
    region: "Sikkim",
    duration: "5D / 4N",
    desc: "Snow peaks, monasteries and pristine lakes define Sikkim’s charm. A perfect blend of adventure, calm and Himalayan beauty.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 14,
    title: "Sikkim",
    region: "Sikkim",
    duration: "6D / 5N",
    desc: "Snow peaks, monasteries and pristine lakes define Sikkim’s charm. A perfect blend of adventure, calm and Himalayan beauty.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 15,
    title: "Kohima",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Experience tribal culture, heritage villages and scenic hills. Kohima blends history, festivals and natural beauty.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 16,
    title: "Dzukou Valley",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Famous for its flower-filled valley, rolling green hills and misty trails. A paradise for hikers and nature lovers.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 17,
    title: "Hornbill Festival",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Nagaland’s grand cultural festival showcasing dances, tribes and traditions. A vibrant celebration of identity and community.",
    image: "https://images.unsplash.com/photo-1496042399019-ab14cb5616d6",
  },
  {
    id: 18,
    title: "Mon & Longwa",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Explore the land of the Konyak tribe, tattooed warriors and unique border villages. A rare cultural and rural experience.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 19,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "5D / 4N",
    desc: "A hidden valley of wooden houses, rivers and untouched landscapes. Mechuka offers raw beauty and a quiet Himalayan experience.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 20,
    title: "Zero",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A charming valley of rice fields, Apatani culture and cool pine forests. Ziro offers calm landscapes and authentic village life.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 21,
    title: "Dambuk",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Known for oranges, music festivals and rugged off-road terrain. Dambuk blends adventure and rural charm.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 22,
    title: "Orange Festival",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A unique festival mixing music, motorsports and local culture in the orange-filled Dambuk valley.",
    image: "https://images.unsplash.com/photo-1496042399019-ab14cb5616d6",
  },
  {
    id: 23,
    title: "Eastern Arunachal",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A circuit covering Parshuramkund, Namsai, Roing and Dambuk. A blend of monasteries, riverside beauty and jungle landscapes.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 24,
    title: "Parshuramkund",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A sacred riverside pilgrimage spot surrounded by hills and forests. Ideal for spiritual seekers and scenic travellers.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 25,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "8D / 7N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f5",
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

  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("");

  const searchRef = useRef(null);
  const sortRef = useRef(null);

  /* CLOSE SEARCH SUGGESTIONS WHEN CLICKED OUTSIDE */
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* CLOSE SORT DROPDOWN WHEN CLICKED OUTSIDE */
  useEffect(() => {
    function handleClickSort(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickSort);
    return () =>
      document.removeEventListener("mousedown", handleClickSort);
  }, []);

  /* SEARCH HANDLER */
  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() !== "") {
      const match = explorePackages.filter(
        (p) =>
          p.title.toLowerCase().includes(value.toLowerCase()) ||
          p.region.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(match.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }

  /* PICK FROM SUGGESTION */
  function pickSuggestion(item) {
    setSearchQuery(item.title);
    setSuggestions([]);
  }

  /* SORT HANDLER */
  function apply(type) {
    setSortType(type);
    setSortOpen(false);
  }

  /* SORTING LOGIC */
  function applySort(list) {
    return [...list].sort((a, b) => {
      if (sortType === "az") return a.title.localeCompare(b.title);
      if (sortType === "za") return b.title.localeCompare(a.title);

      const getDays = (str) => parseInt(str.split("D")[0]);
      if (sortType === "short") return getDays(a.duration) - getDays(b.duration);
      if (sortType === "long") return getDays(b.duration) - getDays(a.duration);

      return 0;
    });
  }

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <div className="brand-header">
        <h1 className="brand-title">Xplore Xperience</h1>
        <p className="brand-sub">Discover the Enchanting Northeast India</p>

        {/* ================= SEARCH WRAPPER ================= */}
        <div className="search-bar">
          <div className="search-wrapper" ref={searchRef}>

            {/* INPUT */}
            <input
              type="text"
              className="search-input"
              placeholder="Search State or package..."
              value={searchQuery}
              onChange={handleSearch}
            />


            {/* SEARCH BUTTON */}
            <button className="search-btn">Search</button>
            {/* SORT BUTTON */}
            <div className="sort-box" ref={sortRef}>
              <button
                className="sort-btn"
                onClick={() => setSortOpen(!sortOpen)}
              >
                Sort By ▾
              </button>

              {sortOpen && (
                <div className="sort-dropdown-airbnb">
                  <div onClick={() => apply("az")}>A → Z</div>
                  <div onClick={() => apply("za")}>Z → A</div>
                  <div onClick={() => apply("short")}>Short → Long</div>
                  <div onClick={() => apply("long")}>Long → Short</div>
                </div>
              )}
            </div>

            {/* SUGGESTIONS */}
            {suggestions.length > 0 && (
              <div className="search-suggestions">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => pickSuggestion(item)}
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

      {/* ================= FEATURED SECTION ================= */}
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
              <button
              onClick={() => {
                    const msg = `Hey! 
I am interested in this package :-

• Package: ${pkg.title}_
• Duration: ${pkg.days}

Please share more details.`;                  

                    window.open(
                      `https://wa.me/919181317151?text=${encodeURIComponent(
                        msg
                      )}`,
                      "_blank"
                    );
                  }}
                >Book Now</button>
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

      {/* ================= EXPLORE SECTION ================= */}
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
          {applySort(
            explorePackages.filter((pkg) => {
              const matchRegion =
                activeRegion === "All Packages" ||
                pkg.region === activeRegion;

              const matchSearch =
                searchQuery.trim() === "" ||
                pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pkg.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pkg.duration.toLowerCase().includes(searchQuery.toLowerCase());

              return matchRegion && matchSearch;
            })
          ).map((pkg) => (
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
                      `https://wa.me/919181317151?text=${encodeURIComponent(
                        msg
                      )}`,
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