import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PsychometricTestPage from './pages/PsychometricTestPage';
import DocumentPage from './pages/DocumentPage';
import PhoneNumberPage from './pages/PhoneNumberPage';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
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
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}>
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/psychometric-tests" element={<PsychometricTestPage />} />
            <Route path="/document-upload" element={<PhoneNumberPage />} />
            <Route path="/document" element={<PhoneNumberPage />} />
            <Route path="/upload-docs" element={<DocumentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
