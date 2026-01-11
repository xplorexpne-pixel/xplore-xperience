import { useState } from "react";
import fuzzyMatch from "../utils/fuzzyMatch";

/* ======================
   DATA
====================== */

const originalSections = [
  {
    state: "Arunachal Pradesh",
    badge: "Popular",
    comingSoon: false,
    packages: [
      "Tawang & Shergaon",
      "Tawang & Sangti Valley",
      "Tawang & Kaziranga",
      "Tawang",
      "Mechuka (Menchuka)",
      "Kibithu & Dong",
    ],
  },
  {
    state: "Assam",
    badge: "Wildlife & Culture",
    comingSoon: false,
    packages: [
      "Kaziranga National Park",
      "Sivasagar",
      "Majuli",
      "Dima Hasao",
    ],
  },
  {
    state: "Meghalaya",
    badge: "Wettest Place",
    comingSoon: false,
    packages: [
      "Quick Meghalaya Escape",
      "Living Root Bridges Tour",
      "Caves & Waterfalls Explorer",
      "Complete Meghalaya Experience",
    ],
  },
  {
    state: "Sikkim",
    badge: "Mountain Paradise",
    comingSoon: false,
    packages: [
      "Classic Sikkim Tour",
      "Extended Sikkim Expedition",
    ],
  },
  {
    state: "Nagaland",
    badge: "Land of Festivals",
    comingSoon: false,
    packages: [
      "Dzukou Valley Trek",
      "Hornbill Festival",
      "Mon & Longwa",
    ],
  },
  {
    state: "Mizoram",
    badge: "Coming Soon",
    comingSoon: true,
    packages: [],
  },
  {
    state: "Tripura",
    badge: "Coming Soon",
    comingSoon: true,
    packages: [],
  },
  {
    state: "Manipur",
    badge: "Coming Soon",
    comingSoon: true,
    packages: [],
  },
];

/* ======================
   COMPONENT
====================== */

export default function Packages() {
  const [searchText, setSearchText] = useState("");
  const [sections, setSections] = useState(originalSections);
  const [suggestions, setSuggestions] = useState([]);

  /* ---------- SEARCH LOGIC ---------- */
  function handleSearch(value) {
    const query = value.trim();

    // Reset when cleared
    if (!query) {
      setSections(originalSections);
      setSuggestions([]);
      return;
    }

    // Reorder: matched region first, others follow
    const matched = originalSections.find(section =>
      fuzzyMatch(query, section.state) ||
      section.packages.some(pkg => fuzzyMatch(query, pkg))
    );

    if (!matched) return;

    const rest = originalSections.filter(
      sec => sec.state !== matched.state
    );

    setSections([matched, ...rest]);
  }

  /* ---------- SUGGESTIONS ---------- */
  function updateSuggestions(value) {
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const allItems = originalSections.flatMap(sec => [
      sec.state,
      ...sec.packages,
    ]);

    const filtered = allItems
      .filter(item => fuzzyMatch(value, item))
      .slice(0, 6);

    setSuggestions(filtered);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSearch(searchText);
    setSuggestions([]);
  }

  return (
    <div className="container">
      {/* HEADER */}
      <header className="head">
        <h1>Xplore Xperience</h1>
        <p>Discover the Enchanting Northeast India</p>

        {/* SEARCH */}
        <form className="search-box" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search state or package..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value);
              updateSuggestions(e.target.value);
            }}
          />
          <button type="submit">Search</button>

          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSearchText(item);
                    handleSearch(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </form>
      </header>

      {/* SECTIONS */}
      {sections.map((section) => (
        <div
          key={section.state}
          className={`state-section ${
            section.comingSoon ? "coming-soon-section" : ""
          }`}
        >
          <div className="state-header">
            <h2>{section.state}</h2>
            <span className="badge">{section.badge}</span>
          </div>

          {section.comingSoon ? (
            <>
              <h3>🚀 Exciting Packages Coming Soon!</h3>
              <p>Stay tuned for amazing adventures.</p>
            </>
          ) : (
            <div className="packages-grid">
              {section.packages.map((pkg) => (
                <div className="package-card" key={pkg}>
                  <div className="package-image">🌍</div>
                  <div className="package-content">
                    <h3>{pkg}</h3>
                    <p>Click to explore itinerary details</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}