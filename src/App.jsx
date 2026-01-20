import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Packages from "./Pages/Package";
import About from "./Pages/About";



import Footer from "./component/Footer";
import WhyUs from "./component/WhyUs";

import Destinations from "./component/Destinations";
import TourPackages from "./component/TourPackages";
import HowItWorks from "./component/HowItWorks";
import CtaBanner from "./component/CtaBanner";
import LatestBlogs from "./component/LatestBlog";
import FAQ from "./component/FAQ";
import HeroParallax from "./component/HeroParallax";
import FeaturedPackage from "./Pages/FeaturedPackage";
import Testimonials from "./component/Testimonial";
import Hero2 from "./component/AnimatedText";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
  <Route
    path="/"
    element={
      <>
        {/* <Hero /> */}
        <HeroParallax/>
        <Destinations />
        <WhyUs />
        <TourPackages />
        <HowItWorks />
        <CtaBanner />
        <FAQ />
        <LatestBlogs />
        <Testimonials/>
        
      </>
    }
  />

  <Route path="/packages" element={<FeaturedPackage />} />
  <Route path="/about" element={<About />} />
  {/* <Route path="/bike-rentals" element={<BikeRentals />} /> */}
</Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
