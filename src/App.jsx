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
const Footer = React.lazy(() => import("./component/Footer"));
const WhyUs = React.lazy(() => import("./component/WhyUs"));
const Destinations = React.lazy(() => import("./component/Destinations"));
const TourPackages = React.lazy(() => import("./component/TourPackages"));
const HowItWorks = React.lazy(() => import("./component/HowItWorks"));
const CtaBanner = React.lazy(() => import("./component/CtaBanner"));
const LatestBlogs = React.lazy(() => import("./component/LatestBlog"));
const FAQ = React.lazy(() => import("./component/FAQ"));
const HeroParallax = React.lazy(() => import("./component/HeroParallax"));
const FeaturedPackage = React.lazy(() => import("./Pages/FeaturedPackage"));
const Testimonials = React.lazy(() => import("./component/Testimonial"));
const GallerySection = React.lazy(() => import("./component/GallerySection"));
const BikeRentalSection = React.lazy(() => import("./component/BikeRentalSection"));
const PopularLocations = React.lazy(() => import("./component/PopularLocations")); function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />

          <Suspense fallback={<div>Loading...</div>}>
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
