import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

import compassIcon from "../assets/compass.png";

export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div
        className="w-full px-10 py-4 flex items-center justify-between border-b"
        style={{
          backgroundColor: "rgba(240, 220, 180, 1)",
        }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img src={compassIcon} alt="logo" className="w-14 h-14" />

          <div>
            <h1 className="text-xl font-bold">
              <span className="text-green-900">Wander</span>
              <span className="text-yellow-500">Wise</span>
            </h1>
            <p className="text-xs text-gray-600">
              Travel Smart • Stay Risk-Free
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/location"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`
            }
          >
            <FaMapMarkerAlt /> Location Info
          </NavLink>

          <NavLink
            to="/price"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`
            }
          >
            <FaRupeeSign /> Price Checker
          </NavLink>

          <NavLink
            to="/risk"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`
            }
          >
            <FaExclamationTriangle /> Risk Incidents
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`
            }
          >
            <FaInfoCircle /> About
          </NavLink>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setShowAuth(true)}
          className="bg-green-700 text-white px-5 py-2 rounded-full"
        >
          Sign In / Sign Up
        </button>
      </div>

      {/* MODAL */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowAuth(false)}
          ></div>

          {/* MODAL BOX */}
          <div className="relative z-50 bg-white rounded-2xl p-8 w-[400px] shadow-2xl">
            {/* CLOSE */}
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2">
              Welcome to WanderWise
            </h2>

            <p className="text-gray-600 mb-6">
              Sign in to report incidents & save your favourite locations.
            </p>

            {/* TOGGLE */}
            <div className="flex bg-gray-200 rounded-lg mb-6">
  
  {/* SIGN IN */}
  <button
    onClick={() => setActiveTab("signin")}
    className={`flex-1 py-2 rounded-lg font-medium transition ${
      activeTab === "signin"
        ? "bg-green-700 text-white"
        : "text-gray-600"
    }`}
  >
    Sign In
  </button>

  {/* SIGN UP */}
  <button
    onClick={() => setActiveTab("signup")}
    className={`flex-1 py-2 rounded-lg font-medium transition ${
      activeTab === "signup"
        ? "bg-green-700 text-white"
        : "text-gray-600"
    }`}
  >
    Sign Up
  </button>

</div>

            {/* INPUTS */}
            {activeTab === "signin" ? (
  <>
    {/* SIGN IN */}
    <input
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-green-600"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-green-600"
    />

    <button
      onClick={() => setLoggedIn(true)}
      disabled={!email || !password}
      className={`w-full py-3 rounded-lg font-medium ${
        email && password
          ? "bg-green-700 text-white"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      Sign In
    </button>

    {loggedIn && (
      <p className="text-green-600 mt-4 text-sm">
        ✅ Signed in successfully! Welcome back.
      </p>
    )}
  </>
) : (
  <>
    {/* SIGN UP */}
    <input
  type="text"
  placeholder="Full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-green-600"
/>

<input
  type="email"
  placeholder="Email address"
  value={signupEmail}
  onChange={(e) => setSignupEmail(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-green-600"
/>

<input
  type="password"
  placeholder="Create password"
  value={signupPassword}
  onChange={(e) => setSignupPassword(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-green-600"
/>

    <button
  onClick={() => setAccountCreated(true)}
  disabled={!name || !signupEmail || !signupPassword}
  className={`w-full py-3 rounded-lg font-medium transition ${
    name && signupEmail && signupPassword
      ? "bg-green-800 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Create Account
</button>
{accountCreated && (
  <p className="text-green-600 mt-4 text-sm">
    ✅ Your account has been successfully created!
  </p>
)}
  </>
)}

        
          </div>
        </div>
      )}
    </>
  );
}


