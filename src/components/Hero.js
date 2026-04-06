import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="px-8 pt-8">

      {/* Hero Container */}
      <div className="relative w-full h-[55vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-[#efe4d3]/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-lg flex items-start gap-4 max-w-sm border border-red-200 hover:scale-105 transition duration-300">

  <div className="bg-red-100 text-red-600 rounded-full p-2">
    ⚠️
  </div>

  <div>
    <h4 className="font-semibold text-red-600">
      High Risk Activity
    </h4>
    <p className="text-sm text-gray-700">
      Multiple taxi fare reports at Connaught Place this evening.
    </p>
  </div>

</div>

        

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Delhi"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-12">

          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
transition-all duration-300 ease-out
hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl">

            <h1 className="text-4xl font-bold mb-3 text-white">
              Explore Delhi
            </h1>

            <p className="text-lg text-gray-200 mb-6">
              Travel Smart, Stay Risk-Free
            </p>

            <div className="flex gap-4">
              <Link to="/location">
  <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-medium transition">
    Get Location Info
  </button>
</Link>

              <Link to="/risk">
  <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
    View Risks Oversight
  </button>
</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}