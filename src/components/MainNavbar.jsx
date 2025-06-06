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
  FaRocket,
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const user = localStorage.getItem("user");
  setIsLoggedIn(!!user);
}, [location]);

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
            src="/logoblackk.png"
            alt="Servocci Logo"
            className="h-35 w-40 rounded-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6"
          ref={dropdownRef}
        >
          <Link to="/" className="text-light hover:text-accent">Home</Link>

          <Link to="/about" className="text-light hover:text-accent">About Us</Link>
          <Link to="/blogs" className="text-light hover:text-accent">Blogs</Link>
          <Link to="/contact" className="text-light hover:text-accent">Contact Us</Link>
        </div>

        {/* Right Side (Desktop) */}
        <div className="absolute right-0 hidden md:flex items-center pr-4 space-x-4">
  {isLoggedIn ? (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          navigate("/login");
        }}
        className="bg-red-600 hover:bg-red-700 text-light px-4 py-1 rounded"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded">
        Login
      </Link>
      <Link
        to="/get-started"
        className="bg-accent hover:bg-secondary text-light px-4 py-1 rounded flex items-center gap-1"
      >
        <FaRocket /> Get Started
      </Link>
    </>
  )}
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

          <Link to="/about" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/blogs" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link to="/events" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
          <Link to="/contact" className="block text-light" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
         {isLoggedIn ? (
  <button
    onClick={() => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    }}
    className="block w-full bg-red-600 text-white py-1 rounded text-center"
  >
    Logout
  </button>
) : (
  <>
    <Link to="/login" className="block bg-secondary text-white py-1 rounded text-center" onClick={() => setIsMobileMenuOpen(false)}>
      Login
    </Link>
    <Link to="/get-started" className="block bg-accent text-white py-1 rounded text-center" onClick={() => setIsMobileMenuOpen(false)}>
      Get Started
    </Link>
  </>
)}

        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
