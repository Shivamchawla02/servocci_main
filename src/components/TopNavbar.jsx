import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopNavbar = () => {
  // Get user from localStorage
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  // Determine role based on presence of 'type' field (exists only for Institution)
  const role = user ? (user.type ? "Institution" : "Student") : null;

  return (
    <div className="bg-[#0f172a] text-gray-300 text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 text-center md:text-left border-b border-gray-700">
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-accent" />
          <span>+91-9958-21-9958, +91-1141-61-8389</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-accent" />
          <span>hello@servocci.com</span>
        </div>
      </div>

      {/* User Info on right */}
      {user && (
        <div
          title={`${role} logged in`}
          className="text-gray-400 text-xs md:text-sm cursor-default select-none"
          style={{ minWidth: "160px" }}
        >
          Welcome,{" "}
          <span className="font-semibold text-accent">
            {user.name.length > 15 ? user.name.slice(0, 15) + "…" : user.name}
          </span>{" "}
          <span className="italic text-gray-400">({role})</span>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
