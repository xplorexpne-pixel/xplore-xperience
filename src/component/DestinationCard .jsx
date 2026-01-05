const destinations = [
    {
        id: 1,
        name: "Bali",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        id: 2,
        name: "Paris",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    {
        id: 3,
        name: "Maldives",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    }
];

export default function DestinationCard() {
    return (
        <section className="section">
            <h2 className="section-title">Popular Destinations</h2>

            <div className="dest-grid">
                {destinations.map((place) => (
                    <div className="dest-card" key={place.id}>
                        <img src={place.image} alt={place.name} />
                        <h3>{place.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
