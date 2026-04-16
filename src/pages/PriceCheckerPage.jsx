import { useState } from "react";


export default function PriceCheckerPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fare, setFare] = useState(null);
  const [selected, setSelected] = useState("Indian Food");
  const formatKey = (text) => text.toLowerCase();
  const fares = {
  "airport|connaught place": { min: 350, max: 500, note: "Airport Express + Metro ₹100 recommended" },
  "airport|paharganj": { min: 350, max: 500, note: "Airport Express to New Delhi Metro ₹100" },
  "airport|karol bagh": { min: 300, max: 450, note: "Airport Express + Blue Line cheaper" },
  "airport|saket": { min: 200, max: 300, note: "Closest major area from airport" },
  "airport|hauz khas": { min: 250, max: 380, note: "30-40 min by cab" },
  "airport|dwarka": { min: 150, max: 250, note: "Closest residential area; Metro much cheaper" },
  "airport|vasant kunj": { min: 180, max: 280, note: "Very close" },
  "airport|rohini": { min: 500, max: 700, note: "Very long - use Metro" },
  "airport|pitampura": { min: 480, max: 650, note: "Long ride - Metro preferred" },
  "airport|lajpat nagar": { min: 220, max: 320, note: "30-40 min, Violet Line option" },
  "airport|greater kailash": { min: 230, max: 340, note: "South Delhi, ~35 min" },
  "airport|noida sector 18": { min: 550, max: 750, note: "Cross-city; expressway cab fastest" },
  "airport|gurugram cyber city": { min: 200, max: 350, note: "Closest IT hub; NH-48 direct" },
  "airport|gurugram sector 29": { min: 220, max: 360, note: "~25-35 min via NH-48" },
  "airport|faridabad": { min: 350, max: 500, note: "~50 min; no direct Metro" },
  "airport|janakpuri": { min: 150, max: 230, note: "Very close; Blue Line also good" },
  "airport|rajouri garden": { min: 180, max: 260, note: "Blue Line + Airport Express cheaper" },
  "airport|south extension": { min: 220, max: 320, note: "~35 min, Yellow Line option" },
  "airport|defence colony": { min: 240, max: 340, note: "~40 min" },
  "airport|mayur vihar": { min: 500, max: 700, note: "Very long - Metro via Blue Line" },
  // New fare entries

"airport|india gate": { min: 180, max: 280, note: "Very close; central Delhi" },
"airport|kashmere gate": { min: 300, max: 420, note: "North Delhi; metro interchange nearby" },
"airport|seelampur": { min: 320, max: 450, note: "East Delhi; traffic can increase fare" },
"airport|shastri park": { min: 300, max: 420, note: "Near Kashmere Gate; moderate distance" },

"airport|gurudwara bangla sahib": { min: 200, max: 300, note: "Near CP; central location" },
"airport|jama masjid": { min: 280, max: 400, note: "Old Delhi; traffic congestion possible" },
"airport|red fort": { min: 300, max: 420, note: "Tourist area; peak hour surge likely" },
"airport|qutub minar": { min: 220, max: 320, note: "South Delhi; relatively smooth route" },
"airport|lotus temple": { min: 240, max: 340, note: "South Delhi; moderate traffic" },
"airport|majnuka tila": { min: 400, max: 550, note: "Far north; longer ride" },
"airport|gurudwara sheesh ganj": { min: 300, max: 420, note: "Old Delhi area; traffic heavy" },
"airport|gurudwara nanak piao": { min: 320, max: 450, note: "North Delhi; mid-long distance" },
"airport|marghat wale baba mandir": { min: 300, max: 420, note: "Near Old Delhi; congestion possible" },
"airport|prachin hanuman mandir": { min: 200, max: 300, note: "Near CP; very central" },
"airport|iskon temple": { min: 240, max: 340, note: "South Delhi; near Nehru Place" },
"airport|lodi garden": { min: 200, max: 300, note: "Central; smooth route usually" },
"airport|amrit udaan": { min: 120, max: 200, note: "Very close to airport" },
"airport|botanical garden": { min: 450, max: 650, note: "Noida; expressway route" },
"airport|delhi zoo": { min: 200, max: 300, note: "Central Delhi; near India Gate" },
  "connaught place|paharganj": { min: 60, max: 120, note: "Walk 12 min or Metro 1 stop" },
  "connaught place|karol bagh": { min: 80, max: 150, note: "Blue Line Metro faster" },
  "connaught place|saket": { min: 200, max: 300, note: "Yellow Line recommended" },
  "connaught place|hauz khas": { min: 180, max: 280, note: "Blue Line Metro" },
  "connaught place|lajpat nagar": { min: 150, max: 240, note: "Violet Line Metro option" },
  "connaught place|south extension": { min: 130, max: 200, note: "~20 min cab" },
  "connaught place|greater kailash": { min: 200, max: 300, note: "~30 min" },
  "connaught place|dwarka": { min: 250, max: 380, note: "Blue Line Metro much cheaper" },
  "connaught place|rohini": { min: 280, max: 420, note: "Red+Yellow Line Metro" },
  "connaught place|pitampura": { min: 250, max: 380, note: "Red Line Metro faster" },
  "connaught place|noida sector 18": { min: 350, max: 500, note: "Blue Line Metro recommended" },
  "connaught place|gurugram cyber city": { min: 350, max: 500, note: "No Metro; NH-48 cab ~45 min" },
  "connaught place|defence colony": { min: 160, max: 250, note: "~25 min" },
  "connaught place|mayur vihar": { min: 200, max: 300, note: "Blue Line Metro convenient" },
  "connaught place|janakpuri": { min: 200, max: 300, note: "Blue Line Metro faster" },
  "connaught place|india gate": { min: 80, max: 150, note: "Very close; 5–10 min cab or auto" },
  "connaught place|kashmere gate": { min: 150, max: 250, note: "Metro (Yellow+Red) faster; ~20 min" },
  "connaught place|seelampur": { min: 200, max: 320, note: "East Delhi; traffic can increase time" },
  "connaught place|shastri park": { min: 180, max: 300, note: "Near Kashmere Gate; Red Line metro option" },
  "connaught place|gurudwara bangla sahib": { min: 50, max: 100, note: "Walkable (~10 min); no cab needed" },

"connaught place|jama masjid": { min: 120, max: 200, note: "Old Delhi; traffic congestion possible" },

"connaught place|red fort": { min: 130, max: 220, note: "Tourist route; peak hour delay likely" },

"connaught place|qutub minar": { min: 250, max: 380, note: "Yellow Line Metro recommended" },

"connaught place|lotus temple": { min: 220, max: 340, note: "Violet Line Metro or cab ~30 min" },

"connaught place|majnuka tila": { min: 250, max: 380, note: "North Delhi; traffic varies" },

"connaught place|gurudwara sheesh ganj": { min: 120, max: 200, note: "Same area as Red Fort; crowded" },

"connaught place|gurudwara nanak piao": { min: 180, max: 280, note: "North Delhi; moderate distance" },

"connaught place|marghat wale baba mandir": { min: 130, max: 220, note: "Near Old Delhi; traffic heavy" },

"connaught place|prachin hanuman mandir": { min: 50, max: 100, note: "Very close; walking best option" },

"connaught place|iskon temple": { min: 200, max: 320, note: "South Delhi; Nehru Place nearby" },

"connaught place|lodi garden": { min: 80, max: 150, note: "Very close; ~10 min cab" },

"connaught place|amrit udaan": { min: 180, max: 280, note: "Near airport; mid distance" },

"connaught place|botanical garden": { min: 300, max: 450, note: "Noida; Blue Line metro best" },

"connaught place|delhi zoo": { min: 100, max: 180, note: "Near India Gate; short ride" },
  "rohini|pitampura": { min: 80, max: 150, note: "Red Line 2-3 stops" },
  "rohini|connaught place": { min: 280, max: 420, note: "Red+Yellow Line Metro" },
  "rohini|karol bagh": { min: 200, max: 300, note: "Red + Blue Line interchange" },
  "rohini|paharganj": { min: 220, max: 320, note: "Red Line to New Delhi" },
  "karol bagh|paharganj": { min: 60, max: 100, note: "Very close; walkable" },
  "karol bagh|saket": { min: 200, max: 300, note: "Blue + Yellow Line Metro" },
  "karol bagh|hauz khas": { min: 180, max: 270, note: "~30 min" },
  "karol bagh|lajpat nagar": { min: 180, max: 270, note: "Violet + Blue interchange" },
  "saket|hauz khas": { min: 60, max: 120, note: "Yellow Line 1 stop" },
  "saket|lajpat nagar": { min: 100, max: 180, note: "Violet Line option" },
  "saket|south extension": { min: 80, max: 150, note: "Very close" },
  "saket|greater kailash": { min: 80, max: 150, note: "~15 min" },
  "saket|defence colony": { min: 100, max: 160, note: "~20 min" },
  "hauz khas|lajpat nagar": { min: 80, max: 150, note: "~15 min cab" },
  "hauz khas|greater kailash": { min: 80, max: 150, note: "~15 min" },
  "hauz khas|south extension": { min: 80, max: 130, note: "Very close" },
  "lajpat nagar|defence colony": { min: 60, max: 100, note: "Very close; walkable" },
  "lajpat nagar|greater kailash": { min: 80, max: 140, note: "~15 min" },
  "noida sector 18|connaught place": { min: 350, max: 500, note: "Blue Line Metro recommended" },
  "noida sector 18|mayur vihar": { min: 150, max: 220, note: "Blue Line few stops" },
  "noida sector 18|lajpat nagar": { min: 250, max: 380, note: "~40 min; Violet Line option" },
  "gurugram cyber city|gurugram sector 29": { min: 60, max: 120, note: "Very close" },
  "gurugram cyber city|saket": { min: 250, max: 380, note: "~35 min via NH-48" },
  "dwarka|janakpuri": { min: 80, max: 150, note: "Blue Line 2-3 stops" },
  "dwarka|rajouri garden": { min: 130, max: 200, note: "Blue Line direct" },
  "mayur vihar|lajpat nagar": { min: 180, max: 280, note: "Violet Line good option" },
  "mayur vihar|noida sector 18": { min: 150, max: 220, note: "Blue Line convenient" },
};

  const handleFare = () => {
  if (!from || !to) return;

  const format = (text) => text.toLowerCase().trim();

  const fromKey = format(from);
  const toKey = format(to);

  const routeKey = `${fromKey}|${toKey}`;
  const reverseKey = `${toKey}|${fromKey}`;

  const result = fares[routeKey] || fares[reverseKey];

  if (result) {
    setFare(result);
  } else {
    setFare({
      min: 100,
      max: 300,
      note: "Estimated fare (route not in database)"
    });
  }
};

  const categories = [
    { name: "Indian Food", icon: "🍛" },
    { name: "Chinese Food", icon: "🥢" },
    { name: "Fast Food", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Coffee", icon: "☕" },
    { name: "Hotel", icon: "🏨" },
    { name: "Auto Rickshaw", icon: "🛺" },
    { name: "Taxi", icon: "🚕" },
  ];
  
  const priceData = {
  "Indian Food": {
    budget: "₹80–₹150",
    avg: "₹200–₹400",
    premium: "₹500–₹1,200",
    tip: "Ask for a menu with prices before ordering."
  },

  "Chinese Food": {
    budget: "₹120–₹200",
    avg: "₹250–₹500",
    premium: "₹600–₹1,500",
    tip: "Avoid restaurants without displayed menus."
  },

  "Fast Food": {
    budget: "₹100–₹200",
    avg: "₹200–₹350",
    premium: "₹300–₹600",
    tip: "Check if GST is included in the displayed price."
  },

  "Pizza": {
    budget: "₹150–₹300",
    avg: "₹300–₹600",
    premium: "₹700–₹1,500",
    tip: "Order directly from brand apps for best price."
  },

  "Coffee": {
    budget: "₹50–₹150",
    avg: "₹150–₹250",
    premium: "₹250–₹500",
    tip: "Street chai is ₹10–₹20 — skip overpriced cafes."
  },

  "Auto Rickshaw": {
    budget: "Min ₹25",
    avg: "₹50–₹150",
    premium: "₹150–₹300",
    tip: "Always insist on meter. Refuse fixed-rate autos."
  },

  "Taxi": {
    budget: "₹100–₹200",
    avg: "₹200–₹500",
    premium: "Airport ₹400+",
    tip: "Use Ola or Uber for transparent pricing."
  },

  "Hotel": {
    budget: "₹400–₹800/night",
    avg: "₹1,000–₹3,000/night",
    premium: "₹4,000+/night",
    tip: "Book via MakeMyTrip/Booking.com — avoid street touts."
  }
};

  return (
    <div className="min-h-screen w-full">

      {/* HEADER */}
      <div className="bg-orange-800 text-white py-10 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl font-bold">₹ Price Checker</h1>
        <p className="mt-2 text-orange-100">
          Compare fares, food prices & services to avoid overcharging in Delhi.
        </p>
      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            🚕 Taxi / Auto Fare Estimator
          </h2>

          <label className="text-sm text-gray-600">From Location</label>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-3 mt-1"
            onKeyDown={(e) => e.key === "Enter" && handleFare()} 
          />

          <label className="text-sm text-gray-600">
            To Location / Service
          </label>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-4 mt-1"
            onKeyDown={(e) => e.key === "Enter" && handleFare()} 
          />

          <button
            onClick={handleFare}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Check Fare →
          </button>

          {fare && (
  <div className="mt-5 border border-orange-200 rounded-xl p-5 bg-orange-50">

    {/* PRICE */}
    <p className="text-2xl font-bold text-orange-600">
      ₹{fare.min} – ₹{fare.max}
    </p>

    {/* NOTE */}
    <p className="text-sm text-gray-500 mt-1">
      {fare?.note}
    </p>

    {/* TIP BOX */}
    <div className="mt-4 bg-green-100 text-green-800 p-3 rounded-lg flex gap-3 text-sm">
      <span>💡</span>
      <span>
        Always confirm price before ride or use Uber/Ola.
      </span>
    </div>

  </div>
)}
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-2">
            🍽 Service / Food Prices
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Select a category to see average prices in Delhi:
          </p>

          {/* CATEGORY GRID */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {categories.map((item) => (
              <button
  key={item.name}
  onClick={() => setSelected(item.name)}
  className={`border rounded-lg py-2 px-3 flex items-center justify-center gap-2 transition
  ${
    selected === item.name
      ? "bg-orange-500 text-white border-orange-500"
      : "hover:bg-orange-100"
  }`}
>
  <span className="w-5 text-center">{item.icon}</span>
  <span className="text-sm">{item.name}</span>
</button>
            ))}
          </div>

          {/* PRICE BOX */}
         {/* PRICE BOX */}
<div className="border border-orange-200 rounded-xl p-5 bg-orange-50">

  <p className="text-gray-700 mb-4 font-medium">
    {selected} — Average Price
  </p>

  {/* GRID */}
  <div className="grid grid-cols-3 text-center text-sm mb-4">

    {/* Budget */}
    <div>
      <p className="text-gray-500">Budget</p>
      <p className="font-semibold text-orange-600">
        {priceData[selected]?.budget}
      </p>
    </div>

    {/* Average */}
    <div>
      <p className="text-gray-500">Average</p>
      <p className="font-semibold text-orange-600">
        {priceData[selected]?.avg}
      </p>
    </div>

    {/* Premium */}
    <div>
      <p className="text-gray-500">Premium</p>
      <p className="font-semibold text-orange-600">
        {priceData[selected]?.premium}
      </p>
    </div>

  </div>

  {/* TIP BOX */}
  <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm flex gap-2">
    <span>💡</span>
    <span>{priceData[selected]?.tip}</span>
  </div>

</div>
        </div>

      </div>
    </div>
  );
}  