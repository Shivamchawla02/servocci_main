import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoverTimeout(setTimeout(() => setDropdownOpen(true), 200));
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoverTimeout(setTimeout(() => setDropdownOpen(false), 200));
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 relative h-20 flex items-center">

        {/* Left: Logo (extreme left) */}
        <div className="absolute left-0">
          <Link to="/" className="flex items-center hover:opacity-90">
  <img
    src="/LogoWhite.jpg"
    alt="Servocci Logo"
    className="h-16 w-35 bg-white p-2 rounded-md shadow-md object-contain"
  />
</Link>

        </div>

        {/* Center: Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
          <Link to="/" className="text-light hover:text-accent">Home</Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center text-light hover:text-accent cursor-pointer">
              Our Services
              <FaCaretDown className="ml-2" />
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-light shadow-lg rounded-md w-48 z-50">
                <Link to="/career-counselling" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Career Counselling
                </Link>
                <Link to="/admission-guidance" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Admission Guidance
                </Link>
                <Link to="/psychometric-tests" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Psychometric Tests
                </Link>
                <Link to="/skill-training-courses" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Skill Training Courses
                </Link>
                <Link to="/test-series-quizzes" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Test Series/Quizzes
                </Link>
                <Link to="/online-degree" className="block px-4 py-2 text-primary hover:bg-accent hover:text-light">
                  Online Degree
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-light hover:text-accent">About Us</Link>
          <Link to="/blogs" className="text-light hover:text-accent">Blogs</Link>
          <Link to="/events" className="text-light hover:text-accent">Events</Link>
          <Link to="/contact" className="text-light hover:text-accent">Contact Us</Link>
          <Link to="/careers" className="text-light hover:text-accent">Careers</Link>
        </div>

        {/* Right: Login/Register (extreme right) */}
        <div className="absolute right-0 hidden md:flex items-center pr-4">
          <Link
            to="/login"
            className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded transition"
          >
            Login/Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 pt-2 px-4">
          <Link to="/" className="block py-2 text-light">Home</Link>
          <Link to="/services" className="block py-2 text-light">Our Services</Link>
          <Link to="/contact" className="block py-2 text-light">Contact Us</Link>
          <Link to="/about" className="block py-2 text-light">About Us</Link>
          <Link to="/blogs" className="block py-2 text-light">Blogs</Link>
          <Link to="/document-upload" className="block py-2 text-light">Document Upload</Link>
          <Link
            to="/login"
            className="block py-2 text-white bg-secondary hover:bg-accent text-center rounded"
          >
            Login/Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
