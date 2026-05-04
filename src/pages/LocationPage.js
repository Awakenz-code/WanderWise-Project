import { useState } from "react";
import DB from "../data/locationData";

export default function LocationPage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({
  name: "Mayur Vihar",
  areaType: "Residential",
  nearestMetro: "Mayur Vihar Phase 1",
  popularFor: "Residential, Local Markets",
  bestTime: "Morning & Evening",
  safety: "Low Risk",
  risk: "Low Risk: Safe residential area",
  transport: ["Metro: Mayur Vihar", "Autos & e-rickshaws"],
  highlights: ["Local Markets", "Parks"],
});
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const locationList = Object.keys(DB);
  const selectSuggestion = (value) => {
  setInput(value);
  setSuggestions([]);
};



  const handleSearch = (customInput) => {
  const key = (customInput || input).toLowerCase().trim();

  const match = Object.keys(DB).find(
    (k) =>
      k === key ||
      DB[k].name.toLowerCase() === key
  );

  if (match) {
    setData(DB[match]);
  } else {
    setData(null);
    alert("Location not found ❌");
  }
};

  const getRiskStyle = (riskText) => {
    if (!riskText) return "bg-gray-100 text-gray-700";

    const text = riskText.toLowerCase();

    if (text.includes("low")) {
      return "bg-green-100 text-green-800";
    } else if (text.includes("moderate")) {
      return "bg-yellow-100 text-yellow-800";
    } else if (text.includes("high")) {
      return "bg-red-100 text-red-800";
    } else {
      return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen w-full">

      {/* HEADER */}
      <div className="bg-green-800 text-white py-10 px-6 md:px-12 lg:px-20 w-full">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          📍 Location Information
        </h1>
        <p className="mt-2 text-green-100">
          Get detailed information about any Delhi location — transport, hotspots, safety & more.
        </p>
      </div>

      {/* SEARCH */}
      <div className="px-6 md:px-12 lg:px-20 py-6 w-full">
  <div className="flex gap-3 w-full relative items-center">

    {/* Input Wrapper */}
    <div className="relative flex-1">
      
      {/* Search Icon */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search any Delhi location... (e.g. Mayur Vihar)"
        value={input}
        onChange={(e) => {
  const value = e.target.value;
  setInput(value);

  if (!value.trim()) {
    setSuggestions([]);
    return;
  }

  const filtered = locationList.filter((loc) =>
    loc.toLowerCase().includes(value.toLowerCase())
  );

  setSuggestions(filtered.slice(0, 5));
  setActiveIndex(-1);
}}
        onKeyDown={(e) => {
  if (e.key === "ArrowDown") {
    setActiveIndex((prev) =>
      prev < suggestions.length - 1 ? prev + 1 : prev
    );
  } else if (e.key === "ArrowUp") {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
  } else if (e.key === "Enter") {
    e.preventDefault();

    if (activeIndex >= 0) {
      const selected = suggestions[activeIndex];

      setInput(selected);
      setSuggestions([]);

      // 🔥 directly search using selected value
      handleSearch(selected);
    } else {
      handleSearch();
    }
  }
}}
        className="w-full pl-12 pr-4 py-3 text-lg rounded-full border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 
        transition-all duration-200 shadow-sm"
      />
      {suggestions.length > 0 && (
  <div className="absolute top-full left-0 w-full bg-white border mt-2 rounded-xl shadow-lg z-10 overflow-hidden">
    {suggestions.map((s, i) => (
      <div
        key={i}
        onClick={() => selectSuggestion(s)}
        className={`px-4 py-3 cursor-pointer transition ${
          i === activeIndex ? "bg-green-100" : "hover:bg-gray-100"
        }`}
      >
        {DB[s].name}
      </div>
    ))}
  </div>
)}
    </div>

    {/* Button */}
    <button
      onClick={handleSearch}
      className="bg-green-700 text-white px-6 py-3 rounded-full 
      hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md"
    >
      Get Info
    </button>

  </div>
</div>

      {/* RESULT */}
      {data && (
        <div className="w-full px-6 md:px-12 lg:px-20 pb-16">

          {/* 🔥 THIS IS THE REAL FIX */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

            {/* LEFT BIG CARD */}
            <div className="md:col-span-2 bg-white rounded-2xl p-7 shadow-lg w-full">

              <h2 className="text-2xl font-bold mb-6">
                📍 {data.name}
              </h2>

              <div className="text-gray-700 space-y-2">

  <div className="flex items-center gap-6 py-2 border-b">
    <span className="text-gray-500 text-sm w-40">Area Type</span>
    <span className="font-semibold text-sm">{data.areaType}</span>
  </div>

  <div className="flex items-center gap-6 py-2 border-b">
    <span className="text-gray-500 text-sm w-40">Nearest Metro</span>
    <span className="font-semibold text-sm">{data.nearestMetro}</span>
  </div>

  <div className="flex items-center gap-6 py-2 border-b">
    <span className="text-gray-500 text-sm w-40">Popular For</span>
    <span className="font-semibold text-sm">{data.popularFor}</span>
  </div>

  <div className="flex items-center gap-6 py-2 border-b">
    <span className="text-gray-500 text-sm w-40">Best Time</span>
    <span className="font-semibold text-sm">{data.bestTime}</span>
  </div>

  <div className="flex items-center gap-6 py-2">
    <span className="text-gray-500 text-sm w-40">Safety</span>
    <span className={`font-semibold text-sm ${
  data.risk?.toLowerCase().includes("low")
    ? "text-green-600"
    : data.risk?.toLowerCase().includes("moderate")
    ? "text-yellow-600"
    : data.risk?.toLowerCase().includes("high")
    ? "text-red-600"
    : "text-gray-700"
}`}>
  {data.risk?.includes("Low")
    ? "Low Risk"
    : data.risk?.includes("Moderate")
    ? "Moderate Risk"
    : data.risk?.includes("High")
    ? "High Risk"
    : "Unknown"}
</span>
  </div>

</div>

              {/* RISK BOX */}
              <div className={`mt-6 p-4 rounded-xl ${getRiskStyle(data.risk)}`}>
                ⚠️ {data.risk}
              </div>

            </div>

            {/* RIGHT SMALL CARD */}
            <div className="md:col-span-1 bg-white rounded-2xl p-7 shadow-lg w-full flex flex-col">

              <h2 className="text-xl font-semibold mb-4">🔥 Hotspots</h2>

<div className="space-y-3">
  {data.highlights?.length ? (
    data.highlights.map((place, index) => (
      <div
        key={index}
        className="flex items-center gap-3 border-b pb-2 last:border-none"
      >
        <span className="text-orange-500">🔷</span>
        <span className="text-gray-700">{place}</span>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No data</p>
  )}
</div>

              <h2 className="text-xl font-semibold mb-4 mt-6">🚇 Transport</h2>

<div className="space-y-3">
  {data.transport?.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 border-b pb-2 last:border-none"
    >
      <span className="text-blue-500">🔷</span>
      <span className="text-gray-700">{item}</span>
    </div>
  )) || "No data"}
</div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}