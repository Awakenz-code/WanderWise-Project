import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import DB from "../data/locationData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



export default function LocationInfo() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({
  name: "Connaught Place",
  areaType: "Shopping & Commercial Hub",
  nearestMetro: "Rajiv Chowk",
  popularFor: "Shopping, Food",
  bestTime: "Morning & Evening",
  safety: "Moderate Risk",
})
const [suggestions, setSuggestions] = useState([]);
const [activeIndex, setActiveIndex] = useState(-1);
useEffect(() => {
  if (DB["connaught place"]) {
    setData(DB["connaught place"]);
  }
}, []);

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

  setSuggestions([]);
  setActiveIndex(-1);
};

  

  return (
    <div className="bg-green-100 border rounded-xl shadow w-full overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">
      
      {/* HEADER */}
      <div className="bg-green-500 px-4 py-3 flex items-center gap-2">
        <FaMapMarkerAlt />
        <h3 className="font-semibold">Location Information</h3>
      </div>

      {/* INPUT */}
      <div className="flex gap-2 my-4 px-5 relative">
        <input
  type="text"
  placeholder="Connaught Place, New Delhi"
  value={input}
  onChange={(e) => {
    const value = e.target.value;
    setInput(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = Object.keys(DB).filter((loc) =>
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
        handleSearch(selected); // 🔥 FIXED
      } else {
        handleSearch();
      }
    }
  }}
  className="flex-1 border rounded px-3 py-2"
/>
{suggestions.length > 0 && (
  <div className="absolute top-full left-5 right-5 bg-white border mt-1 rounded shadow z-20 max-h-60 overflow-y-auto">
    
    {suggestions.map((s, i) => (
      <div
        key={i}
        onClick={() => {
          setInput(s);
          setSuggestions([]);
          handleSearch(s);
        }}
        className={`px-4 py-2 cursor-pointer ${
          i === activeIndex
            ? "bg-green-100"
            : "hover:bg-gray-100"
        }`}
      >
        {DB[s].name}
      </div>
    ))}

  </div>
)}

        <button
  onClick={() => handleSearch()}   // ✅ NOT navigate
  className="bg-green-700 text-white px-4 rounded"
>
  Get Info
</button>
      </div>

      {/* RESULT CARD */}
      {data && (
        <div className="bg-white p-4 rounded shadow mx-5 mb-5">
          <h3 className="font-bold text-lg">{data.name}</h3>

          <ul className="text-sm mt-2 space-y-1">
            <li><b>Area Type:</b> {data.areaType}</li>
            <li><b>Nearest Metro:</b> {data.nearestMetro}</li>
            <li><b>Popular For:</b> {data.popularFor}</li>
            <li><b>Best Time:</b> {data.bestTime}</li>
          </ul>

          <div className={`mt-3 p-2 rounded text-sm font-medium ${
  (data.risk || "").toLowerCase().includes("low") && !(data.risk || "").toLowerCase().includes("medium")
    ? "bg-green-100 text-green-700"
    : (data.risk || "").toLowerCase().includes("medium") || (data.risk || "").toLowerCase().includes("moderate")
    ? "bg-yellow-100 text-yellow-700"
    : "bg-red-100 text-red-700"
}`}>
  {(data.risk || "").toLowerCase().includes("low") && !(data.risk || "").toLowerCase().includes("medium")
    ? "✅" 
    : (data.risk || "").toLowerCase().includes("medium") || (data.risk || "").toLowerCase().includes("moderate")
    ? "⚠️" 
    : "🔴"} {data.risk || "No risk data"}
</div>
        </div>
      )}
    </div>
  );
}