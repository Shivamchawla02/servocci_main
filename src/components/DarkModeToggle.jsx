import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors focus:outline-none"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      {/* Optional icons inside toggle */}
      <span className="absolute left-1 top-1 text-yellow-400 text-xs select-none pointer-events-none">
        ☀️
      </span>
      <span className="absolute right-1 top-1 text-gray-800 dark:text-yellow-300 text-xs select-none pointer-events-none">
        🌙
      </span>
    </button>
  );
};

export default DarkModeToggle;
