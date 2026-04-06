import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import LocationInfo from "./components/LocationInfo.js";
import PriceChecker from "./components/PriceChecker.js";
import RiskFeed from "./components/RiskFeed.js";
import Footer from "./components/Footer.js";
import LocationDetails from "./components/LocationDetails.js";
import LocationPage from "./pages/LocationPage.js";
import PriceCheckerPage from "./pages/PriceCheckerPage";
import RiskIncidentsPage from "./pages/RiskIncidentsPage";
import AboutPage from "./pages/AboutPage";

import bgImage from "./assets/background.png";
import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <Features />

      <div className="grid grid-cols-3 gap-6 px-10 py-6">
        <LocationInfo />
        <PriceChecker />
        <RiskFeed />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
  className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2f1e]/20 via-[#3b2f1e]/20 to-[#3b2f1e]/20"></div>

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location/:name" element={<LocationDetails />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/price" element={<PriceCheckerPage />} />
            <Route path="/risk" element={<RiskIncidentsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;