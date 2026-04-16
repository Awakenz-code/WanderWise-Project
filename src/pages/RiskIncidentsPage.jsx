import { useState } from "react";

export default function RiskIncidentsPage() {

const [type, setType] = useState("");
const [risk, setRisk] = useState("Medium");
const [location, setLocation] = useState("");
const [description, setDescription] = useState("");
const [filter, setFilter] = useState("All");

const handleSubmit = () => {
    if (!type || !location || !description) {
      alert("Please fill all fields");
      return;
    }

    const newIncident = {
      type,
      location,
      risk,
      description,
      date: new Date().toISOString().split("T")[0],
    };

    console.log(newIncident);
    alert("Report submitted!");

    // reset
    setType("");
    setLocation("");
    setRisk("Medium");
    setDescription("");
  };

  const incidents = [
    {
    title: "Taxi Overcharging",
    location: "Connaught Place, Delhi",
    desc: "Multiple reports of taxi drivers demanding 3-4x the meter fare from tourists near CP outer circle. Always use app-based cabs or insist on meter.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Evening (6-10 PM)",
    people: "15 tourists",
    date: "2026-04-03",
  },
  {
    title: "Restaurant Bill Dispute",
    location: "Karol Bagh, Delhi",
    desc: "Restaurants adding hidden charges to bills — 'service charge', 'GST', 'table charge'. Always ask for itemized bill and question any unlisted fee.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Lunch & Dinner hours",
    people: "8 visitors",
    date: "2026-04-02",
  },
  {
    title: "Fake Hotel Booking Links",
    location: "Paharganj, Delhi",
    desc: "Phishing websites mimicking hotel booking portals, collecting payment without valid reservations. Book only through official hotel websites or trusted OTAs.",
    risk: "Low",
    color: "border-l-4 border-green-500",
    time: "Online (anytime)",
    people: "5 users",
    date: "2026-04-01",
  },
  {
    title: "Gem Store Scam",
    location: "Paharganj, Delhi",
    desc: "Tourists lured into overpriced gem shops claiming government rates. Avoid unsolicited recommendations.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Daytime",
    people: "12 tourists",
    date: "2026-04-03",
  },
  {
    title: "Fake Tour Guide",
    location: "Red Fort / Old Delhi",
    desc: "Unlicensed guides at monuments charging exorbitant fees and providing false information. Only hire guides from the official ASI counter at monument entrances.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Morning & Afternoon",
    people: "10 visitors",
    date: "2026-04-02",
  },
  {
    title: "ATM Card Skimming",
    location: "Nehru Place, Delhi",
    desc: "Card skimming devices found on 2 ATMs near the IT complex. Use bank-branch ATMs, cover keypad while entering PIN, prefer UPI payments.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Anytime",
    people: "7 users",
    date: "2026-04-01",
  },
  {
    title: "Pickpocketing",
    location: "Metro Stations, Delhi",
    desc: "Common in crowded metro coaches during peak hours. Keep bags in front, avoid displaying valuables near doors.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Peak hours (8-10 AM, 5-8 PM)",
    people: "20 commuters",
    date: "2026-04-03",
  },
  {
    title: "Fake Tourist Police",
    location: "India Gate, Delhi",
    desc: "Individuals posing as tourist police demanding documents and fines. Real Delhi Police wear official uniforms with badge numbers. Ask for ID before complying.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Afternoon & Evening",
    people: "6 tourists",
    date: "2026-04-04",
  },
  {
    title: "Auto-Rickshaw Meter Fraud",
    location: "Lajpat Nagar, Delhi",
    desc: "Auto drivers claiming meters are broken to charge flat inflated rates. Insist on meter or use Ola/Uber autos. Night charges are 1.5x — confirm before boarding.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Night (10 PM - 6 AM)",
    people: "9 commuters",
    date: "2026-04-03",
  },
  {
    title: "Fake Travel Agency",
    location: "Paharganj, Delhi",
    desc: "Fraudulent travel desks near budget hotels selling fake train/bus tickets and non-existent tour packages. Always book at official railway counters or IRCTC online.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Daytime",
    people: "11 tourists",
    date: "2026-04-02",
  },
  {
    title: "Drugged Food / Drink",
    location: "Old Delhi / Chandni Chowk",
    desc: "Tourists offered free snacks or chai by strangers near railway stations who later steal belongings. Never accept food or drink from unknown individuals.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Evening",
    people: "4 tourists",
    date: "2026-04-01",
  },
  {
    title: "Fake Charity Collection",
    location: "Connaught Place, Delhi",
    desc: "Individuals with printed pamphlets soliciting donations for fake NGOs and orphanages. Verify charity registration before donating. Report suspicious collectors.",
    risk: "Low",
    color: "border-l-4 border-green-500",
    time: "Daytime",
    people: "14 visitors",
    date: "2026-04-04",
  },
  {
    title: "Currency Exchange Fraud",
    location: "Karol Bagh, Delhi",
    desc: "Unauthorized money changers offering better rates but handing back counterfeit or short-counted notes. Only exchange at RBI-authorized banks or hotel forex desks.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Anytime",
    people: "5 tourists",
    date: "2026-04-03",
  },
  {
    title: "Tuk-Tuk Shopping Commission Scam",
    location: "Chandni Chowk, Delhi",
    desc: "Auto and cycle-rickshaw drivers offering 'free city tours' that conveniently stop at overpriced shops where drivers earn commission. Decline unsolicited detours.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Morning & Afternoon",
    people: "18 tourists",
    date: "2026-04-02",
  },
  {
    title: "Shoe Removal Scam",
    location: "Jama Masjid, Old Delhi",
    desc: "Touts charging ₹200–500 to 'mind' shoes at religious sites where shoe removal is required. Use the official free locker service at the entrance.",
    risk: "Low",
    color: "border-l-4 border-green-500",
    time: "Daytime",
    people: "22 visitors",
    date: "2026-04-04",
  },
  {
    title: "UPI QR Code Tampering",
    location: "Sarojini Nagar Market, Delhi",
    desc: "Fake QR code stickers placed over legitimate merchant QR codes redirecting payments to fraudsters. Always verify merchant name on UPI confirmation screen before paying.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Anytime",
    people: "13 shoppers",
    date: "2026-04-05",
  },
  {
    title: "Overpriced Bottled Water",
    location: "Agra-Delhi Highway Dhabas",
    desc: "Roadside vendors selling refilled sealed water bottles at tourist-inflated prices. Buy only from sealed-factory bottles with intact tamper-proof caps from petrol pumps.",
    risk: "Low",
    color: "border-l-4 border-green-500",
    time: "Daytime",
    people: "30 travellers",
    date: "2026-04-03",
  },
  {
    title: "Fake Monk Donation",
    location: "Lotus Temple Area, Delhi",
    desc: "Individuals dressed as Buddhist monks placing bracelets on tourists then aggressively demanding donations. Politely refuse and walk away — it is not a real religious practice.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Afternoon",
    people: "8 tourists",
    date: "2026-04-05",
  },
  {
    title: "Petrol Pump Short-Fill",
    location: "Multiple Locations, Delhi",
    desc: "Petrol pump attendants distract customers during fill and deliver less fuel than paid for. Watch the meter reset to zero before fueling and stay attentive throughout.",
    risk: "Medium",
    color: "border-l-4 border-yellow-500",
    time: "Anytime",
    people: "16 drivers",
    date: "2026-04-04",
  },
  {
    title: "Bag Snatching on E-Rickshaw",
    location: "Saket / Malviya Nagar, Delhi",
    desc: "Pillion riders on bikes snatching bags and phones from passengers on slow-moving e-rickshaws near market areas. Keep bags on lap away from road side, avoid phone use.",
    risk: "High",
    color: "border-l-4 border-red-500",
    time: "Evening (5-9 PM)",
    people: "6 commuters",
    date: "2026-04-05",
  },
  ];

  const getBadge = (risk) => {
    if (risk === "High")
      return "bg-red-100 text-red-600";
    if (risk === "Medium")
      return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-600";
  };

  const filtered =
    filter === "All"
      ? incidents
      : incidents.filter((i) => i.risk === filter);

  return (
   <div
  className="min-h-screen w-full bg-fixed bg-cover"
  style={{
    backgroundImage: "url('/your-bg.png')",
  }}
>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white py-10 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl font-bold">⚠ Risk Incident Map</h1>
        <p className="mt-2 text-red-100">
          Real reported scams, overcharging & safety incidents across Delhi.
        </p>
      </div>

      {/* FILTERS */}
      <div className="px-6 md:px-12 lg:px-20 py-6 flex gap-3 flex-wrap">

        {["All", "High", "Medium", "Low"].map((type) => (
  <button
    key={type}
    onClick={() => setFilter(type)}
    className={`px-5 py-2 rounded-full border text-sm transition-all duration-300
      ${
        filter === type
          ? type === "High"
            ? "bg-red-600 text-white border-red-600"
            : type === "Medium"
            ? "bg-yellow-400 text-white border-yellow-400"
            : type === "Low"
            ? "bg-green-600 text-white border-green-600"
            : "bg-black text-white border-black"
          : "bg-white hover:bg-gray-100 border-gray-300"
      }`}
  >
    {type === "High" && "🔴 "}
    {type === "Medium" && "🟡 "}
    {type === "Low" && "🟢 "}
    {type === "All" ? "All Incidents" : `${type} Risk`}
  </button>
))}
      </div>

      {/* INCIDENT CARDS */}
      <div className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">

        {filtered.map((item, i) => (
          <div
            key={i}
            className={`
  bg-white rounded-2xl p-6 shadow-md ${item.color}
  transition-all duration-300 ease-in-out
  hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1
`}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${getBadge(item.risk)}`}>
                {item.risk} Risk
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">📍 {item.location}</p>

            <p className="text-gray-700 mt-3 text-sm">{item.desc}</p>

            <div className="flex gap-4 text-xs text-gray-500 mt-4">
              <span>🕒 {item.time}</span>
              <span>👥 {item.people}</span>
              <span>📅 {item.date}</span>
            </div>
          </div>
        ))}

      </div>

      {/* REPORT FORM */}
      <div className="px-6 md:px-12 lg:px-20 py-10">
        <div className="bg-white rounded-2xl p-6 shadow-lg">

          <h2 className="text-xl font-semibold mb-2">📢 Report an Incident</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Help other travelers by reporting scams, overcharging, or safety issues.
          </p>

          <div className="grid md:grid-cols-2 gap-4">

            <select
  value={type}
  onChange={(e) => setType(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}  
  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
>
  <option value="">Select type...</option>
  <option>Taxi Overcharging</option>
  <option>Restaurant Bill Dispute</option>
  <option>Fake Tour Guide</option>
  <option>Pickpocketing</option>
  <option>ATM/Card Fraud</option>
  <option>Fake Products</option>
  <option>Other Scam</option>
</select>

            <input
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  placeholder="e.g. Connaught Place, Delhi"
  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}  
  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>

            <select
  value={risk}
  onChange={(e) => setRisk(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}  
  className={`border rounded-lg p-3 w-full focus:outline-none
    ${
      risk === "High"
        ? "bg-red-100 text-red-700"
        : risk === "Medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700"
    }`}
>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>

            <input
              placeholder="Anonymous"
              className="border rounded-lg p-3"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}  
            />

          </div>

          <textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Describe what happened in detail..."
  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>


          
          <button
  onClick={handleSubmit}
  className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
>
  Submit Report
</button>

        </div>
      </div>

    </div>
  );
}