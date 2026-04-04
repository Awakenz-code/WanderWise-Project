import { FaExclamationTriangle } from "react-icons/fa";

export default function RiskFeed() {
  const risks = [
    {
      title: "Taxi Overcharging Reports",
      location: "Connaught Place, Delhi",
      risk: "High",
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Restaurant Bill Dispute",
      location: "Karol Bagh, Delhi",
      risk: "Medium",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Fake Hotel Booking Links",
      location: "Paharganj, Delhi",
      risk: "Low",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="bg-red-100 border border-red-200 rounded-xl shadow w-full overflow-hidden hover:scale-[1.02] transition duration-300">

      {/* HEADER (ATTACHED) */}
      <div className="bg-red-400 px-5 py-3 flex justify-between items-center border-b border-red-300">
        
        <div className="flex items-center gap-2">
          <FaExclamationTriangle className="text-red-700" />
          <h3 className="font-semibold text-red-900">
            Recent Risk Incidents
          </h3>
        </div>

        <span className="text-sm text-red-700 cursor-pointer hover:underline">
          View All →
        </span>
      </div>

      {/* LIST */}
      <div className="p-5 space-y-3">
        {risks.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-gray-800">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">
                {item.location}
              </p>
            </div>

            <span
              className={`px-2 py-1 text-xs rounded ${item.color}`}
            >
              {item.risk} Risk
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}