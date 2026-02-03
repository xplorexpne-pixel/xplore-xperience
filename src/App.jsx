import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import SmoothScroll from "./component/SmoothScroll";
import Reveal from "./component/Reveal";

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
import GallerySection from "./component/GallerySection";
import BikeRentalSection from "./component/BikeRentalSection";
import PopularLocations from "./component/PopularLocations";
import HeroSection from "./component/HeroSection";




function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Hero /> */}
                  {/* <HeroParallax /> */}
                  <HeroSection />

                  <Reveal>
                    <PopularLocations />
                  </Reveal>

                  {/* <Destinations /> */}

                  <Reveal>
                    <WhyUs />
                  </Reveal>

                  <Reveal>
                    <BikeRentalSection />
                  </Reveal>

                  {/* <TourPackages /> */}

                  <Reveal>
                    <HowItWorks />
                  </Reveal>

                  {/* <CtaBanner /> */}

                  <Reveal>
                    <FAQ />
                  </Reveal>

                  <Reveal>
                    <GallerySection />
                  </Reveal>

                  <Reveal>
                    <Testimonials />
                  </Reveal>

                </>
              }
            />

            <Route path="/packages" element={<FeaturedPackage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/bike-rentals" element={<BikeRentals />} /> */}
          </Routes>

          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </div >
  );
}

export default App;
