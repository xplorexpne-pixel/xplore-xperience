import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FireBase";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      const snapshot = await getDocs(collection(db, "packages"));
      setPackages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }
    fetchPackages();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading packages...</p>;

  return (
    <section className="section" id="packages">
      <h2 className="section-title">Our Travel Packages</h2>

      <div className="package-grid">
        {packages.map(pkg => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.duration}</p>
            <span>₹{pkg.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
