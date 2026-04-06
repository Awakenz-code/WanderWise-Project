import locationIcon from "../assets/icons/location.png";
import priceIcon from "../assets/icons/price.png";
import riskIcon from "../assets/icons/risk.png";

import skylineGreen from "../assets/skyline-green.png";
import skylineOrange from "../assets/skyline-orange.png";
import skylinePurple from "../assets/skyline-purple.png";
import { Link } from "react-router-dom";


export default function Features() {
  return (
    <div className="px-10 py-10">

      {/* TITLE */}
      <h2 className="text-center text-2xl font-bold mb-8">
        Explore Features
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {/* 🟢 LOCATION → LOTUS */}
        <div className="relative bg-[#e6f4ec] border border-green-300 rounded-2xl p-6 shadow-md overflow-hidden 
transition-all duration-300 ease-in-out 
hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
          
          {/* IMAGE */}
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url(${skylineGreen})`,
              backgroundSize: "cover",
              backgroundPosition: "15% center", // 👈 lotus side
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10">
            <img src={locationIcon} className="w-14 h-14 mb-4" />

            <h3 className="font-bold text-lg text-green-900">
              Location Information
            </h3>

            <p className="mt-2 text-green-800 text-sm">
              Get details, hotspots, transport & risk insights for any Delhi location.
            </p>

            <Link to="/location" onClick={() => window.scrollTo(0, 0)}>
  <button className="text-green-700 font-normal">
    Check Location →
  </button>
</Link>
          </div>
        </div>

        {/* 🟠 PRICE → INDIA GATE */}
        <div className="relative bg-[#e6f4ec] border border-orange-300 rounded-2xl p-6 shadow-md overflow-hidden 
transition-all duration-300 ease-in-out 
hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
          
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url(${skylineOrange})`,
              backgroundSize: "cover",
              backgroundPosition: "50% center", // 👈 center = India Gate
            }}
          />

          <div className="relative z-10">
            <img src={priceIcon} className="w-14 h-14 mb-4" />

            <h3 className="font-bold text-lg text-orange-900">
              Price Checker
            </h3>

            <p className="mt-2 text-orange-800 text-sm">
              Compare average fares & prices to avoid overcharging.
            </p>

            <Link to="/price" onClick={() => window.scrollTo(0, 0)}>
  <button className="text-orange-600 font-normal">
    Check Prices →
  </button>
</Link>
          </div>
        </div>

        {/* 🟣 RISK → JAMA MASJID */}
        <div className="relative bg-[#e6f4ec] border border-purple-300 rounded-2xl p-6 shadow-md overflow-hidden 
transition-all duration-300 ease-in-out 
hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
          
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url(${skylinePurple})`,
              backgroundSize: "cover",
              backgroundPosition: "85% center", // 👈 right side = Jama Masjid
            }}
          />

          {/* ADD COLOR BOOST OVERLAY */}
          <div className="absolute inset-0 bg-purple-200/20"></div>

          <div className="relative z-10">
            <img src={riskIcon} className="w-14 h-14 mb-4" />

            <h3 className="font-bold text-lg text-purple-900">
              Risk Incidents
            </h3>

            <p className="mt-2 text-purple-800 text-sm">
              See real reported risks on map with time, type & risk level.
            </p>

            <Link to="/risk" onClick={() => window.scrollTo(0, 0)}>
  <button className="text-purple-600 font-normal">
    Open page →
  </button>
</Link>
          </div>
        </div>

      </div>
    </div>
  );
}