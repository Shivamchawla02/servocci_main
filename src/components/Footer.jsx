import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Text */}
            <div>
            <img
                src="/LogoWhite.jpg"
                alt="Servocci Counsellors Logo"
                className="h-12 mb-4"
            />
            <p className="mb-4">
                Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4 text-lg">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
                <FaYoutube />
            </div>
            </div>


        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Career Counselling</li>
            <li>Admission Guidance</li>
            <li>Psychometric Tests</li>
            <li>Skill Training Courses</li>
            <li>Test Series</li>
            <li>Online Degree</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-sm">
        © 2025 Servocci Counsellors, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
