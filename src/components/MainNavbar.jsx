import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDesktopDropdownOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  const navigateAndCloseMenus = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  let dropdownTimeout = null;

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 relative h-20 flex items-center">
        {/* Logo */}
        <Link to="/" className="absolute left-0 flex items-center">
          <img
            src="/LogoWhite.jpg"
            alt="Servocci Logo"
            className="h-16 w-35 bg-white p-2 rounded-md shadow-md object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6"
          ref={dropdownRef}
        >
          <Link to="/" className="text-light hover:text-accent">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setIsDesktopDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout = setTimeout(() => {
                setIsDesktopDropdownOpen(false);
              }, 200);
            }}
          >
            <div
              className="flex items-center text-light hover:text-accent cursor-pointer"
              onClick={() => setIsDesktopDropdownOpen((prev) => !prev)}
            >
              Our Services <FaCaretDown className="ml-2" />
            </div>

            {isDesktopDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-light dark:bg-gray-800 shadow-lg rounded-md w-64 z-50"
                onMouseEnter={() => clearTimeout(dropdownTimeout)}
                onMouseLeave={() => {
                  dropdownTimeout = setTimeout(() => {
                    setIsDesktopDropdownOpen(false);
                  }, 200);
                }}
              >
                {serviceLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigateAndCloseMenus(link.path)}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-primary dark:text-gray-300 hover:bg-accent hover:text-light"
                  >
                    {link.icon} {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-light hover:text-accent">About Us</Link>
          <Link to="/blogs" className="text-light hover:text-accent">Blogs</Link>
          <Link to="/events" className="text-light hover:text-accent">Events</Link>
          <Link to="/contact" className="text-light hover:text-accent">Contact Us</Link>
          <Link to="/careers" className="text-light hover:text-accent">Careers</Link>
        </div>

        {/* Right Side (Desktop) */}
        <div className="absolute right-0 hidden md:flex items-center pr-4 space-x-4">
          <Link to="/login" className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded">Login/Register</Link>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="bg-secondary px-3 py-1 rounded">
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="text-light text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-primary dark:bg-gray-900">
          <Link to="/" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* Mobile Dropdown */}
          <div className="block text-light cursor-pointer" onClick={() => setIsMobileDropdownOpen((prev) => !prev)}>
            <div className="flex items-center justify-between">
              Our Services <FaCaretDown />
            </div>
            {isMobileDropdownOpen && (
              <div className="mt-2 pl-4">
                {serviceLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigateAndCloseMenus(link.path)}
                    className="block w-full text-left py-1 text-primary dark:text-gray-300 hover:bg-accent hover:text-light"
                  >
                    {link.icon} {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/blogs" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <Link to="/document-upload" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Document Upload</Link>
          <Link to="/login" className="block bg-secondary text-white py-1 rounded text-center" onClick={() => setIsMobileMenuOpen(false)}>Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
