import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar'; // ✅ Import TopNavbar
import MainNavbar from './components/MainNavbar'; // ✅ Import MainNavbar
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PsychometricTestPage from './pages/PsychometricTestPage';
import DocumentPage from './pages/DocumentPage';
import PhoneNumberPage from './pages/PhoneNumberPage';
import NotFound from './pages/NotFound.jsx';
import FreeTestPage from './pages/FreeTestPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage';
import AboutUs from './pages/AboutUsPage.jsx';
import ContactUs from './pages/ContactUsPage.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        {/* ✅ Global TopNavbar */}
        <TopNavbar />

        {/* ✅ Global MainNavbar with dark mode toggle */}
        <MainNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <main className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/psychometric-tests" element={<PsychometricTestPage />} />
            <Route path="/document-upload" element={<PhoneNumberPage />} />
            <Route path="/document" element={<PhoneNumberPage />} />
            <Route path="/upload-docs" element={<DocumentPage />} />
            <Route path="/free-test" element={<FreeTestPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="/career-counselling" element={<PlaceholderPage title="Career Counselling" />} />
            <Route path="/admission-guidance" element={<PlaceholderPage title="Admission Guidance" />} />
            <Route path="/skill-training-courses" element={<PlaceholderPage title="Skill Training Courses" />} />
            <Route path="/test-series-quizzes" element={<PlaceholderPage title="Test Series / Quizzes" />} />
            <Route path="/online-degree" element={<PlaceholderPage title="Online Degree" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
