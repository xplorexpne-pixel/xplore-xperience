import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showCarry, setShowCarry] = useState(false);

  // LOCK BACKGROUND SCROLL WHEN POPUP IS OPEN
  const overlayActive = showTerms || showCarry;
  if (overlayActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {/* ============================
          POPUP OVERLAY
      ============================ */}
      {overlayActive && (
        <div className="overlay-active" onClick={() => {
          setShowTerms(false);
          setShowCarry(false);
        }}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => {
                setShowTerms(false);
                setShowCarry(false);
              }}
            >
              ✕
            </button>

            {showTerms && (
              <>
                <h2>Terms & Conditions</h2>
                <p>
                

By booking a trip with Xplore Xperience (XploreXp), you agree to the following terms and conditions. Please read carefully before making a reservation.

1. Accommodations <br />
In some remote areas, luxury hotels may not be available. Do not expect 24/7 electricity, hot water, or Wi-Fi in such locations.

Standard rooms are included in our regular tour packages. Customized tours allow you to choose your rooms or hotels according to your preference, subject to availability. Any room upgrades will incur additional charges.

For triple-sharing rooms, we provide an extra mattress, not a full extra bed.

For large groups (10–20 people), it may be necessary to book multiple hotels. Rooms may not be identical, though we strive to make them as similar as possible.

In hilly or remote areas, water and electricity may be limited. Some hotels have fixed schedules for hot and cold water. Your cooperation is appreciated.

Guests must provide a valid ID and Inner Line Permit (where applicable) for hassle-free check-in. <br />

2. Transportation <br />

Vehicles may be delayed due to unforeseen circumstances such as traffic or strikes. Please board promptly when the vehicle arrives.

In hilly areas, some vehicles may not have air conditioning.

Please follow the tour itinerary closely. Refunds cannot be provided if you miss the group or leave early. <br />

3. Booking & Payment <br />

Booking through agents or third parties: Your contract is with the agent; XploreXp acts as a supplier.

Full payment is required at least 3 days before the trip.

By paying the deposit, you agree to all terms and conditions (consider this a virtual handshake).
<br />
4. Health & Safety <br />

Guests must inform us and the tour leader if they are suffering from illness or taking medication.

Prior to the trip, consult a doctor to ensure you are fit for travel, especially for trips in high-altitude areas.

XploreXp is not liable for any harm, illness, injury, accidents, delays, discomfort, theft, or loss of personal belongings during the trip.

Guests are responsible for any additional costs arising from natural disasters, adverse weather, earthquakes, fires, war, strikes, government actions, or other unforeseen events.

Guests with special needs should inform us at the time of booking. We will try to assist, but cannot guarantee full accommodations.
<br />
5. Behavior & Conduct
<br />
XploreXp reserves the right to remove any guest whose behavior disrupts the group or jeopardizes safety.

No alcohol or drugs before or during the trip. Violators may be asked to leave without refund.

Follow local laws, traffic rules, and instructions from tour leaders. Non-compliance may result in termination of participation.

Smoking is prohibited in vehicles; please follow local smoking regulations.
<br />

6. Luggage & Personal Belongings <br />

Guests are responsible for their personal belongings at all times. XploreXp is not responsible for lost or damaged baggage.

Illegal items are strictly prohibited.
<br />
7. Flight & Transport Issues <br />

XploreXp is not responsible for flight cancellations, delays, overbooking, or route changes. No refunds or compensation will be provided if such issues prevent participation.
<br />
8. Photography & Marketing <br />

By participating in XploreXp tours, you consent to the use of your photos and videos for promotion and marketing purposes.
<br />
9. Miscellaneous
<br />
We will always do our best to provide excellent service. However, XploreXp is not responsible for the quality of hotels, restaurants, or third-party services.

Guests are responsible for their own safety and the safety of any passengers in their care.

Refunds cannot be provided for services not used due to illness, personal reasons, or leaving the tour early.

Acknowledgment

By booking and making a payment with XploreXp, you confirm that you:

Have read and understood these terms

Accept responsibility for your health, safety, and belongings

Agree to abide by the rules and regulations outlined above
                </p>

                <div className="checkbox-row">
                  <input type="checkbox" id="agree" />
                  <label htmlFor="agree">I agree to the Terms & Conditions</label>
                </div>
              </>
            )}

            {showCarry && (
              <>
                <h2>Things to Carry</h2>
                <p>
                  {/* Your Things-to-carry text */}
                  Xplore Xperience (XploreXp) – Things to Carry
1. Travel Essentials <br />

Valid ID (Passport, Aadhar card, or Driver’s License)

Inner Line Permit (if visiting restricted areas)

Travel tickets (bus, flight, train, etc.)

Cash & cards (ATMs may not be available in remote areas)

Travel insurance documents
<br />
2. Clothing
<br />
Comfortable casual clothes for travel

Warm layers (sweaters, jackets, thermals) for hilly or cold regions

Rain gear (poncho or waterproof jacket) if traveling during monsoon

Comfortable walking shoes/hiking boots

Flip-flops or sandals for hotel use

Socks, underwear, and sleepwear

Hat, sunglasses, and scarf for sun and dust protection
<br />
3. Health & Hygiene <br />

Personal medications (with prescription if needed)

First-aid kit (band-aids, antiseptic, painkillers, motion sickness tablets, etc.)

Sunscreen and lip balm with SPF

Hand sanitizer and wet wipes

Toothbrush, toothpaste, shampoo, soap, towel, and personal hygiene items

Tissue papers (some remote areas may have limited toilet paper availability)
<br />
4. Electronics <br />

Mobile phone & charger

Power bank (electricity may be limited in remote areas)

Camera and memory cards (optional, for photography enthusiasts)

Universal travel adapter (if needed) <br />

5. Miscellaneous <br />

Water bottle (refillable recommended)

Snacks for long journeys

Backpack or daypack for daily excursions

Sunglasses and sunscreen

Notebook and pen (optional)

Personal entertainment (books, cards, music, etc.)

Travel pillow and eye mask (optional for long journeys) <br />

6. Safety & Adventure Gear (if applicable) <br />

Hiking stick (for hilly treks)

Gloves and woolen caps for cold regions

Flashlight/headlamp with extra batteries

Insect repellent (especially for forest or hilly areas)

Lightweight rain cover for backpack

Important Tips

Pack light and smart – you will be moving around a lot.

Avoid carrying valuables unless necessary.

Keep a small bag ready with essentials during the daily trips.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* ============================
          FOOTER SECTION
      ============================ */}
      <footer className="footer">
        <div className="footer-container">

          {/* LEFT BRAND */}
          <div className="footer-left">
            <h3>Xplore Xperience</h3>
            <p>Curated travel experiences for explorers.</p>

            <div className="footer-socials">
              <a className="icon-btn" href="https://www.instagram.com/xplorexp">
                <i className="ri-instagram-line"></i>
              </a>
              <a className="icon-btn" href="https://www.facebook.com/Xplorexpne">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="footer-right">

            {/* COLUMN 1 */}
            <div className="footer-col">
              <h4>Important</h4>
              <ul>
                <li onClick={() => setShowTerms(true)}>Terms & Conditions</li>
                <li onClick={() => setShowCarry(true)}>Things to Carry</li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="https://wa.me/917000000000">Join with us</a></li>
                <li><a href="https://wa.me/917000000000">Partner with us</a></li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <Link to="/about"><li>Who we are</li></Link>
                <Link to="/about"><li>Our mission</li></Link>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-col">
              <h4>Packages</h4>
              <ul>
                <Link to="/packages"><li>Packages</li></Link>
                <li>Custom Packages</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Xplore Xperience. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}