import React from 'react';

const TopNavbar = () => {
  return (
    <div className="bg-dark text-light text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 text-center md:text-left border-b-2 border-secondary">
      
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
        <span>📞 +91-9958219958 | +91-1141618389</span>
        <span>📧 hello@servocci.com</span>
      </div>

      {/* Login Buttons */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
        <a
          href="https://servocci.in/login"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security for external links
          className="bg-secondary hover:bg-accent-dark text-white px-4 py-1 rounded transition ease-in-out duration-300"
        >
          Counsellor Login
        </a>
        <a
          href="/school-login"
          className="bg-secondary hover:bg-accent-dark text-white px-4 py-1 rounded transition ease-in-out duration-300"
        >
          School Login
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
