import { useParams, useNavigate } from "react-router-dom";
import DB from "../data/locationData";

export default function LocationDetails() {
  const { name } = useParams();
  const navigate = useNavigate(); // ✅ FIXED

  const data = DB[name];

  if (!data) {
    return (
      <div className="p-10 text-center text-red-600">
        Location not found ❌
      </div>
    );
  }

  return (
    <div className="p-10">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        ← Back
      </button>

      <div className="grid grid-cols-2 gap-6">
        
        {/* LEFT */}
        <div className="bg-white rounded-xl p-5 shadow">
          <h2 className="text-xl font-bold mb-4">📍 {data.name}</h2>

          <p><b>Area Type:</b> {data.areaType}</p>
          <p><b>Nearest Metro:</b> {data.nearestMetro}</p>
          <p><b>Popular For:</b> {data.popularFor}</p>
          <p><b>Best Time:</b> {data.bestTime}</p>

          <p className="mt-2 text-green-600 font-semibold">
            {data.safety}
          </p>

          <div className="mt-3 bg-green-100 p-2 rounded text-sm">
            {data.risk}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl p-5 shadow">
          <h2 className="text-lg font-semibold mb-3">🔥 Hotspots</h2>
          <p>{data.hotspots || "No data"}</p>

          <h2 className="text-lg font-semibold mt-5 mb-3">🚇 Transport</h2>
          <p>{data.transport || "No data"}</p>
        </div>

      </div>
    </div>
  );
}