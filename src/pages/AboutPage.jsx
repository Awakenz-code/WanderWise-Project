import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-10">

      {/* HERO */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">
          🌍 About WanderWise
        </h1>
        <p className="mt-3 text-green-100 max-w-2xl">
          Travel smart, stay risk-free. WanderWise helps you explore cities
          with confidence by providing real-time insights on pricing, safety,
          and local hotspots.
        </p>
      </div>

      {/* MISSION */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">🎯 Our Mission</h2>
          <p className="text-gray-600">
            To protect travelers from scams, overcharging, and unsafe areas by
            providing transparent, community-driven information.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">💡 What We Do</h2>
          <p className="text-gray-600">
            We combine pricing insights, risk reports, and location intelligence
            to help users make informed decisions instantly.
          </p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
  <span>✨</span>
  <span className="relative">
    Key Features
    <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 rounded-full"></span>
  </span>
</h2>

        <div className="grid md:grid-cols-3 gap-6">

  {[
    {
      title: "📍 Location Insights",
      desc: "Explore detailed insights about any location including safety levels, nearby hotspots, transport options and real-time risk alerts to help you travel smarter",
      extra: "Get safety ratings, nearby hotspots, transport info & live risk updates",
    },
    {
      title: "💰 Price Checker",
      desc: "Estimate fair prices for taxis, food and services using distance + surge logic to avoid getting overcharged.",
      extra: "Smart fare prediction with real-world patterns",
    },
    {
      title: "⚠ Risk Alerts",
      desc: `Explore real user-reported scams, overcharging incidents and unsafe areas across Delhi.
Stay informed with detailed reports including location, time and risk level to avoid trouble.`,
      extra: "Filter by High, Medium, Low risk instantly",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="font-semibold text-lg">{item.title}</h3>

      <p className="text-gray-600 mt-2 text-sm">
        {item.desc}
      </p>

      <div className="mt-4 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
        💡 {item.extra}
      </div>
    </div>
  ))}
</div>
      </div>

      <div className="bg-white/80 rounded-2xl shadow-md p-8 mt-10">
  <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
    👥 Our Team
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* CODING */}
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-700 text-white text-3xl mb-4">
        💻
      </div>
      <h3 className="text-lg font-semibold">Ronak & Hritik</h3>
      <p className="text-gray-600">Development</p>
    </div>

    {/* DATA */}
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-700 text-white text-3xl mb-4">
        📊
      </div>
      <h3 className="text-lg font-semibold">Shambhavi & Shimon</h3>
      <p className="text-gray-600">Data & Research</p>
    </div>

    {/* PPT */}
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-700 text-white text-3xl mb-4">
        📑
      </div>
      <h3 className="text-lg font-semibold">Tanya & Samriddhi</h3>
      <p className="text-gray-600">PPT and Documentation</p>
    </div>

  </div>
</div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <p className="text-gray-700 mb-4">
          🚀 Ready to explore smarter?
        </p>
       <Link to="/">
  <button onClick={() => window.scrollTo(0, 0)}
          className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">
    Start Exploring
  </button>
</Link>
      </div>
    </div>
  );
}