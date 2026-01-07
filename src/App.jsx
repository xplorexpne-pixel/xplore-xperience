import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Packages from "./Pages/Package";
import About from "./Pages/About";
import BikeRentals from "./Pages/BikeRentals";



import Footer from "./component/Footer";
import WhyUs from "./component/WhyUs";

import DestinationCard from "./component/DestinationCard ";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Hero /><WhyUs /><DestinationCard /></>} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/About" element={<About />} />
          <Route path="/bike-rentals" element={<BikeRentals />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
