import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Packages from "./Pages/Package";
import About from "./Pages/About";
import BikeRentals from "./Pages/BikeRentals";



import Footer from "./component/Footer";
import WhyUs from "./component/WhyUs";

import DestinationCard from "./component/DestinationCard ";
import Destinations from "./component/Destinations";
import TourPackages from "./component/TourPackages";
import HowItWorks from "./component/HowItWorks";
import BookNowSec from "./component/CtaBanner";
import CtaBanner from "./component/CtaBanner";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Hero /><Destinations /><WhyUs /><TourPackages /><HowItWorks /><CtaBanner /></>} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/bike-rentals" element={<BikeRentals />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
