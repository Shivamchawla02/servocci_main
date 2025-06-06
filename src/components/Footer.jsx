import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaGlobe
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
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
            <a href="https://www.facebook.com/profile.php?id=61555148367108" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/servocci/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/servocci" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.youtube.com/@SERVOCCI" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://in.linkedin.com/company/servocci" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.servocci.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
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

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <div className="flex flex-col gap-2 text-sm">
            <div>
              📞 +91-9958-21-9958 <br />
              📞 +91-1141-61-8389
            </div>
            <div>
              📧 <a href="mailto:hello@servocci.com" className="hover:underline">hello@servocci.com</a>
            </div>
          </div>
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
