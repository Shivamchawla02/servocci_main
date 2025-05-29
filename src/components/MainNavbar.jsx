import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaCaretDown,
  FaBrain,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFileAlt,
  FaUniversity,
} from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const serviceLinks = [
  { name: "Career Counselling", path: "/career-counselling", icon: <FaBrain /> },
  { name: "Admission Guidance", path: "/admission-guidance", icon: <FaGraduationCap /> },
  { name: "Psychometric Tests", path: "/psychometric-tests", icon: <FaFileAlt /> },
  { name: "Skill Training Courses", path: "/skill-training-courses", icon: <FaChalkboardTeacher /> },
  { name: "Test Series/Quizzes", path: "/test-series-quizzes", icon: <FaLaptopCode /> },
  { name: "Online Degree", path: "/online-degree", icon: <FaUniversity /> },
];

const MainNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown open
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Show dropdown on hover for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setDropdownOpen(false);
  };

  // Toggle dropdown open/close (desktop click & mobile)
  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 relative h-20 flex items-center">
        {/* Logo */}
        <div className="absolute left-0">
          <Link to="/" className="flex items-center hover:opacity-90">
            <img
              src="/LogoWhite.jpg"
              alt="Servocci Logo"
              className="h-16 w-35 bg-white p-2 rounded-md shadow-md object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <Link to="/" className="text-light dark:text-gray-200 hover:text-accent">Home</Link>

          {/* Dropdown */}
          <div className="relative cursor-pointer" aria-haspopup="true" aria-expanded={dropdownOpen}>
            <div
              onClick={handleDropdownToggle}
              className="flex items-center text-light dark:text-gray-200 hover:text-accent select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleDropdownToggle();
                }
              }}
            >
              Our Services <FaCaretDown className="ml-2" />
            </div>

            <div
              className={`absolute top-full left-0 mt-2 bg-light dark:bg-gray-800 shadow-lg rounded-md w-64 z-50 transition-all duration-300 ease-in-out overflow-hidden
                ${dropdownOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 px-4 py-2 text-primary dark:text-gray-300 hover:bg-accent hover:text-light transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="text-light dark:text-gray-200 hover:text-accent">About Us</Link>
          <Link to="/blogs" className="text-light dark:text-gray-200 hover:text-accent">Blogs</Link>
          <Link to="/events" className="text-light dark:text-gray-200 hover:text-accent">Events</Link>
          <Link to="/contact" className="text-light dark:text-gray-200 hover:text-accent">Contact Us</Link>
          <Link to="/careers" className="text-light dark:text-gray-200 hover:text-accent">Careers</Link>
        </div>

        {/* Right Section */}
        <div className="absolute right-0 hidden md:flex items-center pr-4 space-x-4">
          <Link to="/login" className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded">Login/Register</Link>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden ml-auto flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="bg-secondary hover:bg-accent text-light px-3 py-1 rounded" aria-label="Toggle Dark Mode">
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (dropdownOpen) setDropdownOpen(false); // close dropdown when toggling mobile menu
            }}
            className="text-light text-2xl"
            aria-label="Toggle Mobile Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 pt-2 px-4 bg-primary dark:bg-gray-900" role="menu" aria-label="Mobile Navigation">
          <Link to="/" className="block py-2 text-light" role="menuitem">Home</Link>
          <div
            className="block py-2 text-light cursor-pointer select-none"
            onClick={handleDropdownToggle}
            role="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleDropdownToggle();
              }
            }}
          >
            <div className="flex items-center">
              Our Services <FaCaretDown className="ml-2" />
            </div>
            {dropdownOpen && (
              <div className="mt-2 pl-4" role="menu">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2 py-1 text-primary dark:text-gray-300 hover:bg-accent hover:text-light rounded"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="block py-2 text-light" role="menuitem">About Us</Link>
          <Link to="/blogs" className="block py-2 text-light" role="menuitem">Blogs</Link>
          <Link to="/contact" className="block py-2 text-light" role="menuitem">Contact Us</Link>
          <Link to="/document-upload" className="block py-2 text-light" role="menuitem">Document Upload</Link>
          <Link to="/login" className="block py-2 text-white bg-secondary hover:bg-accent text-center rounded" role="menuitem">Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
