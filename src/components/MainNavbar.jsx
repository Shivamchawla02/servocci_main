import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaBrain, FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaFileAlt, FaUniversity } from 'react-icons/fa';
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
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    if (window.innerWidth < 768) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setDropdownOpen(false);
    }
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

        {/* Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6 relative"

          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">Home</Link>
          
          {/* Services Dropdown */}
          <div
            className="relative cursor-pointer flex items-center text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent"
            onClick={handleDropdownToggle}
          >
            <span className="flex items-center select-none">
              Our Services <FaCaretDown className="ml-2" />
            </span>

            <div
              className={`absolute top-full left-0 mt-2 bg-light dark:bg-gray-800 shadow-lg rounded-md w-64 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
              }`}
            >

              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 px-4 py-2 text-primary dark:text-gray-300 hover:bg-accent hover:text-light transition-colors duration-150"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">About Us</Link>
          <Link to="/blogs" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">Blogs</Link>
          <Link to="/events" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">Events</Link>
          <Link to="/contact" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">Contact Us</Link>
          <Link to="/careers" className="text-light dark:text-gray-200 hover:text-accent dark:hover:text-accent">Careers</Link>
        </div>

        {/* Right side */}
        <div className="absolute right-0 hidden md:flex items-center pr-4 space-x-4">
          <Link to="/login" className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded transition">Login/Register</Link>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="bg-secondary hover:bg-accent text-light px-3 py-1 rounded transition flex items-center justify-center"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden pb-4 pt-2 px-4 bg-primary dark:bg-gray-900">
          <Link to="/" className="block py-2 text-light dark:text-gray-200">Home</Link>
          <div className="block py-2 text-light dark:text-gray-200" onClick={handleDropdownToggle}>
            <div className="flex items-center">
              Our Services <FaCaretDown className="ml-2" />
            </div>
            {dropdownOpen && (
              <div className="mt-2 pl-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2 py-1 text-primary dark:text-gray-300 hover:bg-accent hover:text-light rounded transition-colors duration-150"
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="block py-2 text-light dark:text-gray-200">About Us</Link>
          <Link to="/blogs" className="block py-2 text-light dark:text-gray-200">Blogs</Link>
          <Link to="/contact" className="block py-2 text-light dark:text-gray-200">Contact Us</Link>
          <Link to="/document-upload" className="block py-2 text-light dark:text-gray-200">Document Upload</Link>
          <Link to="/login" className="block py-2 text-white bg-secondary hover:bg-accent text-center rounded">Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
