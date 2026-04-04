import { FaRupeeSign } from "react-icons/fa";

export default function PriceChecker() {
  return (
    <div className="bg-orange-100 border border-orange-200 rounded-xl shadow w-full overflow-hidden hover:scale-[1.02] transition duration-300">

      {/* HEADER (ATTACHED) */}
      <div className="bg-orange-400 px-5 py-3 flex items-center gap-2 border-b border-orange-300">
        <FaRupeeSign className="text-orange-700" />
        <h3 className="font-semibold text-orange-900">
          Price Checker
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* Inputs */}
        <div className="space-y-3">
          <input
            placeholder="From (India Gate)"
            className="w-full border rounded px-3 py-2"
          />
          <input
            placeholder="To (Karol Bagh)"
            className="w-full border rounded px-3 py-2"
          />

          <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
            Check Average Price
          </button>
        </div>

        {/* Result */}
        <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700">Estimated Taxi Fare</p>
          <h3 className="text-xl font-bold text-orange-700">
            ₹150 – ₹220
          </h3>
          <p className="text-xs text-gray-500">
            Based on recent data
          </p>
        </div>

      </div>
    </div>
  );
}