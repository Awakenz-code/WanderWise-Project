import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationInfo() {
  return (
    <div className="bg-green-100 border border-green-200 rounded-xl shadow w-full overflow-hidden hover:scale-[1.02] transition duration-300">

      {/* HEADER (ATTACHED PERFECTLY) */}
      <div className="bg-green-400 px-5 py-3 flex items-center gap-2 border-b border-green-300">
        <FaMapMarkerAlt className="text-green-700" />
        <h3 className="font-semibold text-green-900">
          Location Information
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Connaught Place, New Delhi"
            className="flex-1 border rounded px-3 py-2"
          />
          <button className="bg-green-700 text-white px-4 rounded">
            Get Info
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Connaught Place
          </h3>

          <ul className="text-sm mt-2 space-y-1 text-gray-600">
            <li>• Area Type: Shopping & Commercial Hub</li>
            <li>• Nearest Metro: Rajiv Chowk</li>
            <li>• Popular For: Shopping, Food</li>
            <li>• Best Time: Morning & Evening</li>
          </ul>
        </div>

        {/* Risk */}
        <div className="mt-3 bg-yellow-100 text-yellow-800 p-2 rounded text-sm">
          ⚠ Moderate Risk: Crowded area, beware of overcharging
        </div>

      </div>
    </div>
  );
}