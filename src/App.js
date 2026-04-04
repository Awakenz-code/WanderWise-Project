import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import LocationInfo from "./components/LocationInfo.js";
import PriceChecker from "./components/PriceChecker.js";
import RiskFeed from "./components/RiskFeed.js";
import Footer from "./components/Footer.js";

import bgImage from "./assets/background.png";

import "./App.css";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* DARK + WARM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2f1e]/0.2 via-[#3b2f1e]/0.2 to-[#3b2f1e]/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Features />

        <div className="grid grid-cols-3 gap-6 px-10 py-6">
          <LocationInfo />
          <PriceChecker />
          <RiskFeed />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;