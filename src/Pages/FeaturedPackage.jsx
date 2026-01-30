
import { useState, useRef, useEffect } from "react";
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
    title: "Kibithu & Dong",
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
    id: 11,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "5D / 4N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "/Northeast/Meghalaya.jpg",
  },
  {
    id: 12,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "6D / 5N",
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
    id: 14,
    title: "Sikkim",
    region: "Sikkim",
    duration: "6D / 5N",
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
    title: "Zero",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A charming valley of rice fields, Apatani culture and cool pine forests. Ziro offers calm landscapes and authentic village life.",
    image: "/Northeast/Meghalaya.jpg", // You don't have a Ziro.jpg
  },
  {
    id: 21,
    title: "Dambuk",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "Known for oranges, music festivals and rugged off-road terrain. Dambuk blends adventure and rural charm.",
    image: "/Northeast/dambuk.webp",
  },
  {
    id: 22,
    title: "Orange Festival",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A unique festival mixing music, motorsports and local culture in the orange-filled Dambuk valley.",
    image: "/Northeast/orange.jpg",
  },
  {
    id: 23,
    title: "Eastern Arunachal",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A circuit covering Parshuramkund, Namsai, Roing and Dambuk. A blend of monasteries, riverside beauty and jungle landscapes.",
    image: "/Northeast/Mechuka.jpg",
  },
  {
    id: 24,
    title: "Parshuramkund",
    region: "Arunachal",
    duration: "6D / 5N",
    desc: "A sacred riverside pilgrimage spot surrounded by hills and forests. Ideal for spiritual seekers and scenic travellers.",
    image: "/Northeast/Kibithu.jpg",
  },
  {
    id: 25,
    title: "Meghalaya",
    region: "Meghalaya",
    duration: "8D / 7N",
    desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s most dramatic landscapes.",
    image: "/Northeast/Meghalaya.jpg",
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
  /* ====================== POPULAR SLIDER LOGIC ====================== */
  /* ================= POPULAR SLIDER DATA + LOGIC ================= */
  const popularPlaces = [
    {
      title: "Meghalaya",
      desc: "Land of waterfalls, living root bridges and crystal-clear rivers. A refreshing getaway into nature’s dramatic landscapes.",
      big: "/Northeast/Meghalaya.jpg",
      small: "/Northeast/Tawang.jpg",
    },
        {
      title: "Tawang",
      desc: "Rolling green hills and a valley famous for seasonal flowers. A paradise for hikers.",
      big: "/Northeast/Tawang.jpg",
      small: "/Northeast/Sikkim.jpg",
    },
    {
      title: "Sikkim",
      desc: "Snow peaks, monasteries and pristine lakes. A perfect blend of calm and Himalayan beauty.",
      big: "/Northeast/Sikkim.jpg",
      small: "/Northeast/Dzuku.jpg",
    },
    {
      title: "Dzukou",
      desc: "Rolling green hills and a valley famous for seasonal flowers. A paradise for hikers.",
      big: "/Northeast/Dzuku.jpg",
      small: "/Northeast/Meghalaya.jpg",
    },
   
    
  ];

  const [popIndex, setPopIndex] = useState(0);

  const nextPopular = () => setPopIndex((popIndex + 1) % popularPlaces.length);
  const prevPopular = () =>
    setPopIndex((popIndex - 1 + popularPlaces.length) % popularPlaces.length);
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

      {/* ====================== POPULAR SECTION ====================== */}

      {/* ===================== POPULAR SECTION ===================== */}
      <div className="popular-wrapper">
        <div className="popular-hero">

          {/* LEFT CONTENT */}
          <div className="popular-left">
            <div className="pop-line"></div>

            <div className="pop-dots">
              {popularPlaces.map((p, i) => (
                <div className={`pop-dot ${i === popIndex ? "active" : ""}`} key={i}>
                  <span className="pop-label">{p.title}</span>
                </div>
              ))}
            </div>
            <div className="pop-texts">
              <h1 className="pop-title">{popularPlaces[popIndex].title}</h1>
              <p className="pop-desc">{popularPlaces[popIndex].desc}</p>

              <button
                className="pop-btn"
                onClick={() =>
                  window.open(
                    `https://wa.me/919181317151?text=I want to inquire about the popular destination: ${popularPlaces[popIndex].title}`,
                    "_blank"
                  )
                }
              >
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="popular-right">
            <div className="pop-card big fade">
              <img src={popularPlaces[popIndex].big} />
            </div>

            <div className="pop-card small fade">
              <img src={popularPlaces[popIndex].small} />
            </div>

            {/* ARROWS */}
            <div className="pop-arrows">
              <button onClick={prevPopular} className="pop-arrow-btn">‹</button>
              <button onClick={nextPopular} className="pop-arrow-btn">›</button>
            </div>
          </div>

        </div>
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