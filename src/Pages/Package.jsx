import { useState } from "react";
import fuzzyMatch from "../utils/fuzzyMatch";
const WHATSAPP_NUMBER = "918134904755"; // Replace with actual number

const DATA = [
  {
    state: "Arunachal Pradesh",
    badge: "Popular",
    packages: [
      {
        title: "Tawang & Shergaon",
        desc: "Serene monasteries and peaceful mountain villages",
        image: "https://media.istockphoto.com/id/910430170/photo/tawang-arunachal-pradesh.jpg?s=612x612&w=0&k=20&c=MKKYsHH_6JRMYROO2bHIsQAW9XoSnl-9nkRGOFgAg0M=",
        badges: ["6D/5N", "Popular"],
      },
      {
        title: "Tawang & Sangti Valley",
        desc: "Snow landscapes and black-necked cranes",
        image: "/images/sangti.jpg",
        badges: ["5D/4N"],
      },
      {
        title: "Tawang & Kaziranga",
        desc: "Mountains + wildlife adventure",
        image: "/images/kaziranga.jpg",
        badges: ["Best Seller"],
      },
      {
        title: "Tawang",
        desc: "Classic monastery and memorial tour",
        image: "/images/tawang2.jpg",
        badges: ["Budget"],
      },
      {
        title: "Mechuka (Menchuka)",
        desc: "Hidden valley with Tibetan culture",
        image: "/images/mechuka.jpg",
        badges: ["Offbeat"],
      },
      {
        title: "Kibithu & Dong",
        desc: "India’s first sunrise point",
        image: "/images/kibithu.jpg",
        badges: ["New"],
      },
    ],
  },
  {
    state: "Assam",
    badge: "Wildlife & Culture",
    packages: [
      {
        title: "Kaziranga National Park",
        desc: "One-horned rhino & jungle safaris",
        image: "/images/kaziranga2.jpg",
        badges: ["3D/2N", "Starts ₹8,999"],
      },
      {
        title: "Sivasagar",
        desc: "Ahom kingdom heritage",
        image: "/images/sivasagar.jpg",
        badges: ["Culture"],
      },
      {
        title: "Majuli",
        desc: "World’s largest river island",
        image: "/images/majuli.jpg",
        badges: ["Peaceful"],
      },
      {
        title: "Dima Hasao",
        desc: "The Switzerland of Assam",
        image: "/images/dima.jpg",
        badges: ["Special"],
      },
    ],
  },
  {
    state: "Meghalaya",
    badge: "Wettest Place",
    packages: [
      {
        title: "Quick Meghalaya Escape",
        desc: "Shillong & Cherrapunji highlights",
        image: "/images/meghalaya.jpg",
        badges: ["3D/2N", "Budget"],
      },
      {
        title: "Living Root Bridges Tour",
        desc: "Nature-made wonders",
        image: "/images/rootbridge.jpg",
        badges: ["5D/4N", "Popular"],
      },
      {
        title: "Caves & Waterfalls Explorer",
        desc: "Adventure through hidden caves",
        image: "/images/caves.jpg",
        badges: ["Adventure"],
      },
      {
        title: "Complete Meghalaya Experience",
        desc: "Offbeat + Dawki + Mawlynnong",
        image: "/images/dawki.jpg",
        badges: ["7D/6N", "Premium"],
      },
    ],
  },
];

const COMING_SOON = ["Mizoram", "Tripura", "Manipur"];

export default function Packages() {
  const [searchText, setSearchText] = useState("");
  const [sections, setSections] = useState(DATA);
  /Whatsapp/
  function openWhatsApp(pkg, state) {
    console.log("clicked:", pkg.title);
    const message = `
Hi 

I’m interested in the *${pkg.title}* package.

 State: ${state}
 Package: ${pkg.title}
 Duration: ${pkg.badges?.join(", ") || "Please share details"}

Please share itinerary, pricing and available dates.
`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }


  function handleSearch(value) {
    const query = value.trim();

    if (!query) {
      setSections(DATA);
      return;
    }

    const filtered = DATA.map(section => ({
      ...section,
      packages: section.packages.filter(pkg =>
        fuzzyMatch(query, section.state) ||
        fuzzyMatch(query, pkg.title)
      ),
    })).filter(section => section.packages.length > 0);

    setSections(filtered);
  }

  return (
    <div className="packages-page">
      <header className="packages-header">
        <h1>Xplore Xperience</h1>
        <p>Discover the Enchanting Northeast India</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search state or package..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(searchText);
            }}
          />
          <button onClick={() => handleSearch(searchText)}>Search</button>
        </div>
      </header>

      {sections.map((section) => (
        <section key={section.state} className="state-section">
          <div className="state-header">
            <h2>{section.state}</h2>
            <span className="badge">{section.badge}</span>
          </div>

          <div className="packages-grid">
            {section.packages.map((pkg) => (
              <div key={pkg.title} className="package-card">

                {/* IMAGE */}
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" />

                  {/* BADGES */}
                  {pkg.badges && (
                    <div className="card-badges">
                      {pkg.badges.map((b) => (
                        <span key={b} className="card-badge">{b}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>

                  {/* ✅ BUTTON ADDED HERE */}
                  <button className="package-btn"
                    onClick={() => openWhatsApp(pkg, section.state)}>
                    Enquire on Whatsapp
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>
      ))}

      {/* COMING SOON */}
      <section className="coming-soon-wrapper">
        {COMING_SOON.map((state) => (
          <div key={state} className="coming-soon-card">
            <h2>{state}</h2>
            <span className="badge coming-soon">Coming Soon</span>
            <p>Exciting packages launching soon 🚀</p>
          </div>
        ))}
      </section>
      <div className="tc-mini"><a href="" className="tnc" >*terms and conditions apply*</a></div>
    </div>
  );
}