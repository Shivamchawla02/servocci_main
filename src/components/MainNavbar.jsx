import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa'; // Importing the dropdown icon

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  // State to manage hover delay
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout
    setHoverTimeout(
      setTimeout(() => setDropdownOpen(true), 200) // Delay for dropdown to open (200ms)
    );
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout
    setHoverTimeout(
      setTimeout(() => setDropdownOpen(false), 200) // Delay for dropdown to close (200ms)
    );
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
  {/* Left Section: Logo + Nav Links */}
  <div className="flex items-center space-x-6">
    {/* Logo */}
    <Link to="/" className="flex items-center flex-shrink-0 hover:opacity-90">
  <img 
    src="/logo.png" 
    alt="Servocci Logo" 
    className="h-10 w-auto mr-2 bg-white p-2 rounded-md shadow-md" 
  />
  <span className="text-light text-xl font-bold">Servocci Counsellors</span>
</Link>



    {/* Nav Links (close to logo) */}
    <div className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-light hover:text-accent">Home</Link>

      {/* Our Services with Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/services" className="flex items-center text-light hover:text-accent">
          Our Services
          <FaCaretDown className="ml-2" />
        </Link>
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

      <Link to="/contact" className="text-light hover:text-accent">Contact Us</Link>
      <Link to="/about" className="text-light hover:text-accent">About Us</Link>
      <Link to="/blogs" className="text-light hover:text-accent">Blogs</Link>
      <Link to="/document-upload" className="text-light hover:text-accent">Document Upload</Link>
    </div>
  </div>

  {/* Right Section: Login Button */}
  <div className="hidden md:flex">
    <Link
      to="/login"
      className="bg-secondary hover:bg-accent text-light px-4 py-1 rounded transition"
    >
      Login/Register
    </Link>
  </div>

  {/* Mobile Toggle */}
  <div className="md:hidden">
    <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
      ☰
    </button>
  </div>
        </div>



        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-light">Home</Link>
            <Link to="/services" className="block py-2 text-light">Our Services</Link>
            <Link to="/contact" className="block py-2 text-light">Contact Us</Link>
            <Link to="/about" className="block py-2 text-light">About Us</Link>
            <Link to="/blogs" className="block py-2 text-light">Blogs</Link>
            <Link
              to="/login"
              className="block py-2 text-white bg-secondary hover:bg-accent text-center rounded"
            >
              Login/Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
