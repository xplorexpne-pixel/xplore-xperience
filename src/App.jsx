import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Packages from "./Pages/Package";
import Contact from "./Pages/Contact";

import DestinationCard from "./component/DestinationCard ";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Hero /><DestinationCard /><Packages /></>} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
