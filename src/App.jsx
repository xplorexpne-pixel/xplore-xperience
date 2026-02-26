import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import ScrollToTop from "./component/ScrollToTop";
import SmoothScroll from "./component/SmoothScroll";
import Reveal from "./component/Reveal";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";

const Packages = React.lazy(() => import("./Pages/Package"));
const About = React.lazy(() => import("./Pages/About"));
const FeaturedPackage = React.lazy(() => import("./Pages/FeaturedPackage"));

import Footer from "./component/Footer";
import WhyUs from "./component/WhyUs";
import Destinations from "./component/Destinations";
import TourPackages from "./component/TourPackages";
import HowItWorks from "./component/HowItWorks";
import CtaBanner from "./component/CtaBanner";
import LatestBlogs from "./component/LatestBlog";
import FAQ from "./component/FAQ";
import HeroParallax from "./component/HeroParallax";
import Testimonials from "./component/Testimonial";
import GallerySection from "./component/GallerySection";
import BikeRentalSection from "./component/BikeRentalSection";
import PopularLocations from "./component/PopularLocations";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />

          <Suspense fallback={<></>}>
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
          </Suspense>
        </SmoothScroll>
      </BrowserRouter>
    </div >
  );
}

export default App;
