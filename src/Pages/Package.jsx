import { useState } from "react";

/* ======================
   REGION + PLACES DATA
====================== */

const regionsData = [
  {
    region: "Assam",
    places: [
      {
        id: 1,
        title: "Guwahati",
        duration: "3 Days / 2 Nights",
        price: "12,000",
        image: "https://images.unsplash.com/photo-1589187155478-2f5f3c7e3f9b",
      },
      {
        id: 2,
        title: "Sibsagar",
        duration: "2 Days / 1 Night",
        price: "9,000",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 3,
        title: "Kaziranga",
        duration: "3 Days / 2 Nights",
        price: "15,000",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
  },
  {
    region: "Meghalaya",
    places: [
      {
        id: 4,
        title: "Shillong",
        duration: "4 Days / 3 Nights",
        price: "18,000",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      },
      {
        id: 5,
        title: "Cherrapunji",
        duration: "3 Days / 2 Nights",
        price: "14,000",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      },
    ],
  },
];

/* ======================
   FUZZY MATCH
====================== */

function fuzzyMatch(input, target) {
  input = input.toLowerCase();
  target = target.toLowerCase();

  if (target.includes(input)) return true;

  let i = 0;
  let j = 0;
  let mismatch = 0;

  while (i < input.length && j < target.length) {
    if (input[i] === target[j]) {
      i++;
      j++;
    } else {
      mismatch++;
      j++;
      if (mismatch > 2) return false;
    }
  }
  return true;
}

/* ======================
   SEARCH SUGGESTIONS
====================== */

const searchSuggestions = regionsData.flatMap(region => [
  { type: "region", label: region.region },
  ...region.places.map(place => ({
    type: "place",
    label: place.title,
    region: region.region,
  })),
]);

/* ======================
   PACKAGES COMPONENT
====================== */

export default function Packages() {
  const [searchText, setSearchText] = useState("");
  const [orderedRegions, setOrderedRegions] = useState(regionsData);
  const [showDropdown, setShowDropdown] = useState(false);

  /* ---------- RESET SEARCH ---------- */
  function resetSearch() {
    setOrderedRegions(regionsData);
    setShowDropdown(false);
  }

  /* ---------- SEARCH HANDLER ---------- */
  function handleSearch(value = searchText) {
    const query = value.trim();
    if (!query) return;

    let matchedRegion = null;

    for (let region of regionsData) {
      if (fuzzyMatch(query, region.region)) {
        matchedRegion = region;
        break;
      }

      const matchedIndex = region.places.findIndex(place =>
        fuzzyMatch(query, place.title)
      );

      if (matchedIndex !== -1) {
        const reorderedPlaces = [
          region.places[matchedIndex],
          ...region.places.filter((_, i) => i !== matchedIndex),
        ];

        matchedRegion = {
          ...region,
          places: reorderedPlaces,
        };
        break;
      }
    }

    if (!matchedRegion) return;

    const restRegions = regionsData.filter(
      r => r.region !== matchedRegion.region
    );

    setOrderedRegions([matchedRegion, ...restRegions]);
    setShowDropdown(false);
  }

  /* ---------- FILTERED SUGGESTIONS ---------- */
  const filteredSuggestions =
    searchText.trim().length > 0
      ? searchSuggestions
          .filter(item => fuzzyMatch(searchText, item.label))
          .slice(0, 6)
      : [];

  return (
    <section className="section" id="packages">
      {/* HEADER */}
      <div className="packages-header">
        <h2 className="section-title">Our Travel Packages</h2>

        <div className="packages-search">
          <input
            type="text"
            placeholder="Search destination or region"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);
              setShowDropdown(true);

              // 🔁 RESET WHEN INPUT IS CLEARED
              if (value.trim() === "") {
                resetSearch();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={() => handleSearch()}>Search</button>

          {showDropdown && filteredSuggestions.length > 0 && (
            <ul className="search-dropdown">
              {filteredSuggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchText(item.label);
                    handleSearch(item.label);
                  }}
                >
                  {item.label}
                  {item.type === "place" && (
                    <span style={{ opacity: 0.6, marginLeft: "6px" }}>
                      ({item.region})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* REGIONS */}
      {orderedRegions.map((region) => (
        <div key={region.region} className="region-block">
          <h3 className="region-title">{region.region}</h3>

          <div className="package-grid">
            {region.places.map((pkg) => (
              <div className="package-card" key={pkg.id}>
                <img src={pkg.image} alt={pkg.title} />
                <h3>{pkg.title}</h3>
                <p>{pkg.duration}</p>
                <span>₹{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}