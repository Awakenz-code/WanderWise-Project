import { FaHome, FaMapMarkerAlt, FaRupeeSign, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import navbarBg from "../assets/navbar-bg.png";
import compassIcon from "../assets/compass.png";

export default function Navbar() {
  return (
    <div
  className="relative w-full px-10 py-4 flex items-center justify-between 
             bg-white/10 backdrop-blur-sm 
             border-b border-[#3b2f1e]/50 
             shadow-[0_6px_25px_rgba(0,0,0,0.25)]"
  style={{ backgroundColor:  'rgba(240, 220, 180, 1.0)',
  backgroundSize: "cover",
  backgroundPosition: "center" }}
  
>

      {/* LEFT: LOGO */}
      <div className="flex items-center gap-3">
        <img 
  src={compassIcon} 
  alt="logo" 
  className="w-14 h-14 object-contain"
/>
        <div>
          <h1 className="text-xl font-bold">
  <span className="text-green-900">Wander</span>
  <span className="text-yellow-500">Wise</span>
</h1>
          <p className="text-xs text-gray-600">Travel Smart • Stay Risk-Free</p>
        </div>
      </div>

      {/* CENTER: NAV LINKS */}
      <div className="flex items-center gap-6">

        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full shadow">
          <FaHome />
          Home
        </button>

        <button className="flex items-center gap-2 text-green-900 hover:text-green-700">
          <FaMapMarkerAlt />
          Location Info
        </button>

        <button className="flex items-center gap-2 text-green-900 hover:text-green-700">
          <FaRupeeSign />
          Price Checker
        </button>

        <button className="flex items-center gap-2 text-green-900 hover:text-green-700">
          <FaExclamationTriangle />
          Risk Incidents
        </button>

        <button className="flex items-center gap-2 text-green-900 hover:text-green-700">
          <FaInfoCircle />
          About
        </button>

      </div>

      {/* RIGHT: BUTTON */}
      <button className="bg-green-800 text-white px-5 py-2 rounded-full shadow hover:bg-green-900">
        Sign In / Sign Up
      </button>



    </div>
  );
}


