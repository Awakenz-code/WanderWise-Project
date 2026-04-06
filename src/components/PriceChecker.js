import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PriceChecker() {
  const [from, setFrom] = useState("connaught place");
  const [to, setTo] = useState("karol bagh");
  const [price, setPrice] = useState("");

  // 📍 distance DB (km)
  const distanceDB = {
   // Airport routes
  "airport–connaught place": 15,
  "airport–paharganj": 16,
  "airport–karol bagh": 14,
  "airport–saket": 12,
  "airport–hauz khas": 11,
  "airport–dwarka": 8,
  "airport–vasant kunj": 6,
  "airport–rohini": 25,
  "airport–pitampura": 22,
  "airport–lajpat nagar": 16,
  "airport–greater kailash": 15,
  "airport–noida sector 18": 32,
  "airport–gurugram cyber city": 10,
  "airport–gurugram sector 29": 14,
  "airport–faridabad": 35,
  "airport–janakpuri": 10,
  "airport–rajouri garden": 12,
  "airport–south extension": 14,
  "airport–defence colony": 15,
  "airport–mayur vihar": 30,

  // Connaught Place routes
  "connaught place–paharganj": 2,
  "connaught place–karol bagh": 5,
  "connaught place–saket": 12,
  "connaught place–hauz khas": 11,
  "connaught place–lajpat nagar": 9,
  "connaught place–south extension": 8,
  "connaught place–greater kailash": 11,
  "connaught place–dwarka": 18,
  "connaught place–rohini": 20,
  "connaught place–pitampura": 16,
  "connaught place–noida sector 18": 14,
  "connaught place–gurugram cyber city": 27,
  "connaught place–defence colony": 9,
  "connaught place–mayur vihar": 13,
  "connaught place–janakpuri": 15,

  // Rohini routes
  "rohini–pitampura": 4,
  "rohini–connaught place": 20,
  "rohini–karol bagh": 15,
  "rohini–paharganj": 18,

  // Karol Bagh routes
  "karol bagh–paharganj": 3,
  "karol bagh–saket": 13,
  "karol bagh–hauz khas": 12,
  "karol bagh–lajpat nagar": 10,

  // Saket routes
  "saket–hauz khas": 3,
  "saket–lajpat nagar": 8,
  "saket–south extension": 7,
  "saket–greater kailash": 5,
  "saket–defence colony": 9,

  // Hauz Khas routes
  "hauz khas–lajpat nagar": 7,
  "hauz khas–greater kailash": 5,
  "hauz khas–south extension": 6,

  // Lajpat Nagar routes
  "lajpat nagar–defence colony": 2,
  "lajpat nagar–greater kailash": 4,

  // Noida routes
  "noida sector 18–connaught place": 14,
  "noida sector 18–mayur vihar": 6,
  "noida sector 18–lajpat nagar": 12,

  // Gurugram routes
  "gurugram cyber city–gurugram sector 29": 3,
  "gurugram cyber city–saket": 20,

  // West Delhi
  "dwarka–janakpuri": 6,
  "dwarka–rajouri garden": 12,

  // East Delhi
  "mayur vihar–lajpat nagar": 10,
  "mayur vihar–noida sector 18": 6,
  };

  const handleCheck = () => {
    const fromKey = from.toLowerCase().trim();
    const toKey = to.toLowerCase().trim();

    const route1 = `${fromKey}-${toKey}`;
    const route2 = `${toKey}-${fromKey}`;

    let distance =
      distanceDB[route1] || distanceDB[route2] || 8; // fallback distance

    // 💰 pricing
    const baseFare = 50;
    const ratePerKm = 12;

    let fare = baseFare + distance * ratePerKm;

    // ⚡ surge logic
    let surge = 1;

    const hour = new Date().getHours();

    // 🌙 Night surge
    if (hour >= 22 || hour <= 6) {
      surge += 0.3;
    }

    // 📍 Peak area surge
    const peakAreas = ["connaught place", "karol bagh", "rajiv chowk"];

    if (
      peakAreas.includes(fromKey) ||
      peakAreas.includes(toKey)
    ) {
      surge += 0.2;
    }

    const finalFare = Math.round(fare * surge);

    // show range
    const min = finalFare - 20;
    const max = finalFare + 30;

    setPrice(`₹${min} – ₹${max}`);
  };

  return (
    <div className="bg-orange-100 border border-orange-200 rounded-xl shadow w-full overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">

      {/* HEADER */}
      <div className="bg-orange-400 px-5 py-3 flex items-center gap-2 border-b border-orange-300">
        <FaRupeeSign className="text-orange-700" />
        <h3 className="font-semibold text-orange-900">Price Checker</h3>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="space-y-3">
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />

          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />

          <button
            onClick={handleCheck}
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            Check Average Price
          </button>
        </div>

        {/* RESULT */}
        <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
          <p className="text-gray-700">Estimated Taxi Fare</p>

          <h3 className="text-xl font-bold text-orange-700">
            {price || "Click to calculate"}
          </h3>

          <p className="text-xs text-gray-500">
            Based on distance + surge pricing
          </p>
        </div>
      </div>
    </div>
  );
}