

import { useState, useRef, useEffect } from "react";
import SmartImage from "../component/SmartImage";
import "./FeaturedPackage.css";

/* ====================== EXPLORE DATA ====================== */
const explorePackages = [
  {
    id: 1,
    title: "Tawang & Shergaon",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A serene journey through Shergaon’s tribal valleys and Tawang’s iconic monasteries. Perfect blend of culture, scenery and high-altitude charm.",
    image: "/Northeast/Shergaon.webp",
  },
  {
    id: 2,
    title: "Tawang & Sangti valley",
    region: "Arunachal",
    duration: "7D / 6N",
    desc: "Explore Tawang’s heritage and Sangti’s peaceful riverside landscapes. Snow peaks, quiet villages and panoramic drives await.",
    image: "/Northeast/Tawang.jpg",
  },
  {
    id: 3,
    title: "Tawang & kaziranga",
    region: "Arunachal",
    duration: "4D / 3N",
    desc: "A unique blend of Tawang’s spiritual beauty and Kaziranga’s wildlife thrills. Experience monasteries, mountains and wild one-horned rhinos.",
    image: "/Northeast/Kaziranga.jpg",
  },
  {
    id: 4,
    title: "Tawang",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Discover Tawang’s ancient monasteries, high passes and alpine lakes. A peaceful escape into Arunachal’s Buddhist heartland.",
    image: "/Northeast/Tawang.jpg",
  },
  {
    id: 5,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A hidden valley of wooden houses, rivers and untouched landscapes. Mechuka offers raw beauty and a quiet Himalayan experience.",
    image: "/Northeast/Mechuka.jpg",
  },
  {
    id: 6,
    title: "Kibithu (Kibithoo) & Dong",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Visit India’s easternmost points known for sunrise views and remote mountain life. A rare offbeat journey into untouched Arunachal.",
    image: "/Northeast/Kibithu.jpg",
  },
  {
    id: 7,
    title: "Kaziranga National Park",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Home to the world-famous one-horned rhinos and lush floodplains. Perfect for jeep safaris, wildlife spotting and nature lovers.",
    image: "/Northeast/Kaziranga.jpg",
  },
  {
    id: 8,
    title: "Mesmerising Assam",
    region: "Assam",
    duration: "6D / 5N",
    desc: "Experience the best of Assam—wildlife, culture and heritage. From Kaziranga’s jungles to Majuli’s traditions, it’s the perfect mix.",
    image: "/Northeast/Assam.jpg",
  },
  {
    id: 9,
    title: "Dima Hasao",
    region: "Assam",
    duration: "6D / 5N",
    desc: "A scenic hill district known for pine forests, waterfalls and peaceful villages. Ideal for slow travel and nature escapes.",
    image: "/Northeast/dimahasao.jpg",
  },
  {
    id: 10,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "7D / 6N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "/Northeast/Meghalaya.jpg",
  },

  {
    id: 13,
    title: "Sikkim",
    region: "Sikkim",
    duration: "5D / 4N",
    desc: "Snow peaks, monasteries and pristine lakes define Sikkim’s charm. A perfect blend of adventure, calm and Himalayan beauty.",
    image: "/Northeast/Sikkim.jpg",
  },

  {
    id: 15,
    title: "Kohima",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Experience tribal culture, heritage villages and scenic hills. Kohima blends history, festivals and natural beauty.",
    image: "/Northeast/Kohima.jpg",
  },
  {
    id: 16,
    title: "Dzukou Valley",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Famous for its flower-filled valley, rolling green hills and misty trails. A paradise for hikers and nature lovers.",
    image: "/Northeast/Dzuku.jpg",
  },
  {
    id: 17,
    title: "Hornbill Festival",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Nagaland’s grand cultural festival showcasing dances, tribes and traditions. A vibrant celebration of identity and community.",
    image: "/Northeast/Hornbill.webp",
  },
  {
    id: 18,
    title: "Mon & Longwa",
    region: "Nagaland",
    duration: "6D / 5N",
    desc: "Explore the land of the Konyak tribe, tattooed warriors and unique border villages. A rare cultural and rural experience.",
    image: "/Northeast/Mon-Nagaland.jpg",
  },
  {
    id: 19,
    title: "Mechuka (Menchuka)",
    region: "Arunachal",
    duration: "5D / 4N",
    desc: "A hidden valley of wooden houses, rivers and untouched landscapes. Mechuka offers raw beauty and a quiet Himalayan experience.",
    image: "/Northeast/Mechuka.jpg",
  },
  {
    id: 20,
    title: "Ziro",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A charming valley of rice fields, Apatani culture and cool pine forests. Ziro offers calm landscapes and authentic village life.",
    image: "/image/ziro2.jpg", // You don't have a Ziro.jpg
  },
  {
    id: 21,
    title: "Ziro Festival of Music",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A charming valley of rice fields, Apatani culture and cool pine forests. Ziro offers calm landscapes and authentic village life.",
    image: "/image/zfm.jpg", // You don't have a Ziro.jpg
  },
  {
    id: 22,
    title: "Dambuk",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Known for oranges, music festivals and rugged off-road terrain. Dambuk blends adventure and rural charm.",
    image: "/Northeast/dambuk.webp",
  },
  {
    id: 23,
    title: "Orange Festival",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A unique festival mixing music, motorsports and local culture in the orange-filled Dambuk valley.",
    image: "/Northeast/orange.jpg",
  },
  {
    id: 24,
    title: "Eastern Arunachal",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A circuit covering Parshuramkund, Namsai, Roing and Dambuk. A blend of monasteries, riverside beauty and jungle landscapes.",
    image: "/Northeast/Mechuka.jpg",
  },
  {
    id: 25,
    title: "Parshuramkund",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A sacred riverside pilgrimage spot surrounded by hills and forests. Ideal for spiritual seekers and scenic travellers.",
    image: "/Northeast/Kibithu.jpg",
  },
  {
    id: 26,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "8D / 7N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "/Northeast/Meghalaya.jpg",
  },
  {
    id: 27,
    duration: "Customizable",
    title: "All Girls Trip",
    region: "Northeast",
    desc: "A trip for all the girls out there to explore the beauty of Northeast, with all the safety and comfort.",
    image: "/image/girls.jpg",
  },
  {
    id: 28,
    duration: "Customizable",
    title: "Senior citizen trip",
    region: "Northeast",
    desc: "A trip for all the senior citizens out there to explore the beauty of Northeast, with all the safety and comfort.",
    image: "/image/senior.png",
  },
  {
    id: 31,
    title: "YouWe Trips",
    duration: "Customizable",
    region: "Northeast",
    desc: "Specially curated pocket-friendly trips for students. Explore the Northeast with your friends at unbeatable prices.",
    image: "/image/youwe_students.png",
  },
  {
    id: 29,
    title: "Trips Coming Soon",
    region: "Manipur",
    duration: "TBD",
    desc: "We are curating the best experiences for Manipur. Stay tuned for updates!",
    image: "/image/coming-soon.svg",
  },
  {
    id: 30,
    title: "Trips Coming Soon",
    region: "Tripura",
    duration: "TBD",
    desc: "We are curating the best experiences for Tripura. Stay tuned for updates!",
    image: "/image/coming-soon.svg",
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
  /* ================= MOBILE SWIPE LOGIC ================= */
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null; // Reset to avoid stale values
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;

    // Swipe Left -> Next (positive diff)
    if (diff > 50) {
      setIndex((prev) => (prev + 1) % popularCards.length);
    }
    // Swipe Right -> Prev (negative diff)
    else if (diff < -50) {
      setIndex((prev) => (prev === 0 ? popularCards.length - 1 : prev - 1));
    }
  }

  const searchRef = useRef(null);
  const sortRef = useRef(null);

  /* ====================== POPULAR SLIDER DATA ====================== */
  const popularCards = [
    {
      title: "Meghalaya",
      desc: "Land of waterfalls, living root bridges and crystal-clear rivers.",
      img: "/Northeast/Meghalaya.jpg",
    },
    {
      title: "Tawang",
      desc: "Monasteries, lakes and peaceful mountain landscapes.",
      img: "/Northeast/Tawang.jpg",
    },
    {
      title: "Sikkim",
      desc: "Snow peaks, monasteries and pristine lakes.",
      img: "/Northeast/Sikkim.jpg",
    },
    {
      title: "Dzukou",
      desc: "Rolling green hills and a valley of seasonal flowers.",
      img: "/Northeast/Dzuku.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = popularCards.length;

  const nextSlide = () => setIndex((i) => (i + 1) % total);
  const prevSlide = () => setIndex((i) => (i - 1 + total) % total);


  /* ================= SEARCH CLOSE WHEN CLICKED OUTSIDE ================= */
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

  /* ================= SORT CLOSE WHEN CLICKED OUTSIDE ================= */
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

  /* ================= SEARCH HANDLER ================= */
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
    } else setSuggestions([]);
  }

  /* ================= SORT LOGIC ================= */
  function apply(type) {
    setSortType(type);
    setSortOpen(false);
  }

  function applySort(list) {
    return [...list].sort((a, b) => {
      if (sortType === "az") return a.title.localeCompare(b.title);
      if (sortType === "za") return b.title.localeCompare(a.title);

      const getDays = (str) => {
        if (!str) return 0;
        if (str.toLowerCase().includes("customizable")) return 100;
        if (str.toLowerCase().includes("tbd")) return 101;
        return parseInt(str.split("D")[0]) || 0;
      };
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
        <div className="searchbar">
          <div className="search-wrapper" ref={searchRef}>
            <input
              type="text"
              className="search-input"
              placeholder="Search State or package..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="search-btn">Search</button>

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

            {suggestions.length > 0 && (
              <div className="search-suggestions">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => setSearchQuery(item.title)}
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


      {/* ====================== POPULAR SECTION ====================== */}
      <div className="popular-wrapper">
        <div className="popular-hero">
          {/* LEFT TEXT / DOTS */}
          <div className="popular-left">
            <div className="pop-line"></div>

            <div className="pop-dots">
              {popularCards.map((p, i) => (
                <div
                  key={i}
                  className={`pop-dot ${i === index ? "active" : ""}`}
                >
                  <span className="pop-label">{p.title}</span>
                </div>
              ))}
            </div>

            <div className="pop-texts">
              <h1 className="pop-title">{popularCards[index].title}</h1>
              <p className="pop-desc">{popularCards[index].desc}</p>

              <button
                className="pop-btn"
                onClick={() =>
                  window.open(
                    `https://wa.me/919181317151?text=I want to inquire about the popular destination: ${popularCards[index].title}`,
                    "_blank"
                  )
                }
              >
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="popular-right fade">
            <div className="pop-card big fade">
              <SmartImage src={popularCards[index].img} alt="" />
              <div className="card-title">{popularCards[index].title}</div>
            </div>

            <div className="pop-card small fade">
              <SmartImage src={popularCards[(index + 1) % total].img} alt="" />
              <div className="card-title small-title">
                {popularCards[(index + 1) % total].title}
              </div>
            </div>

            <div className="pop-arrows">
              <button className="pop-arrow-btn" onClick={prevSlide}>‹</button>
              <button className="pop-arrow-btn" onClick={nextSlide}>›</button>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== MOBILE POPULAR HERO (ONLY < 768px) ===================== */}
      <div
        className="popular-mobile-hero"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background */}
        <div className="popular-mobile-bg"></div>

        {/* LEFT LINE + DOTS */}
        <div className="mobile-left">
          <div className="mobile-line"></div>

          <div className="mobile-dots">
            {popularCards.map((p, i) => (
              <div
                key={i}
                className={`mobile-dot ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="mobile-card fade">
          <SmartImage src={popularCards[index].img} alt="" />
        </div>

        {/* TITLE */}
        <h2 className="mobile-title">{popularCards[index].title}</h2>

        {/* DESCRIPTION */}
        <p className="mobile-desc">{popularCards[index].desc}</p>

        {/* BUTTON */}
        <button
          className="mobile-btn"
          onClick={() =>
            window.open(
              `https://wa.me/919181317151?text=I want to inquire about ${popularCards[index].title}`,
              "_blank"
            )
          }
        >
          Explore
        </button>
      </div>

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
                pkg.region === activeRegion ||
                pkg.id === 27 ||
                pkg.id === 28 ||
                pkg.id === 31;

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

              <div className="explore-card-img">
                <SmartImage
                  src={pkg.image}
                  alt={pkg.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

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