import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import MainNavbar from './components/MainNavbar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PsychometricTestPage from './pages/PsychometricTestPage';
import NotFound from './pages/NotFound.jsx';
import FreeTestPage from './pages/FreeTestPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage';
import AboutUs from './pages/AboutUsPage.jsx';
import ContactUs from './pages/ContactUsPage.jsx';
import Login from './pages/Login.jsx';
import GetStarted from './pages/GetStarted.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';
import RegisterInstitution from './pages/RegisterInstituition.jsx';
import CareerCounsellingPage from './pages/CareerCounselingPage.jsx';

// Chat widget styles
const BrevoChatPosition = () => (
  <style>{`
    #brevo-conversations-widget {
      position: fixed !important;
      left: 20px !important;
      bottom: 20px !important;
      width: 350px !important;
      height: 500px !important;
      max-width: 90vw !important;
      max-height: 80vh !important;
      z-index: 9999 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
      right: auto !important;
    }

    #brevo-conversations-widget iframe {
      width: 100% !important;
      height: 100% !important;
    }
  `}</style>
);

// AppRoutes: contains all routes
const AppRoutes = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = ['/login', '/get-started', '/register/student', '/register/instituition'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && (
        <>
          <TopNavbar />
          <MainNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </>
      )}

      <main className="pt-0">
        <Routes>
          {/* Auth pages with no nav */}
          <Route
            path="/login"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">← Back to Home</button>
                <Login />
              </div>
            }
          />
          <Route
            path="/get-started"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">← Back to Home</button>
                <GetStarted />
              </div>
            }
          />
          <Route
            path="/register/student"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">← Back to Home</button>
                <RegisterStudent />
              </div>
            }
          />
          <Route
            path="/register/instituition"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">← Back to Home</button>
                <RegisterInstitution />
              </div>
            }
          />

          {/* Main routes */}
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/psychometric-tests" element={<PsychometricTestPage />} />
          <Route path="/free-test" element={<FreeTestPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career-counselling" element={<CareerCounsellingPage />} />

          {/* Placeholder service routes */}
          <Route path="/admission-guidance" element={<PlaceholderPage title="Admission Guidance" />} />
          <Route path="/skill-training-courses" element={<PlaceholderPage title="Skill Training Courses" />} />
          <Route path="/test-series-quizzes" element={<PlaceholderPage title="Test Series / Quizzes" />} />
          <Route path="/online-degree" element={<PlaceholderPage title="Online Degree" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

// Main App
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

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

  useEffect(() => {
    // Brevo widget initialization
    window.BrevoConversationsID = '677f91cdb1d21bb58509ee28';
    window.BrevoConversations = window.BrevoConversations || function () {
      (window.BrevoConversations.q = window.BrevoConversations.q || []).push(arguments);
    };

    window.BrevoConversations('init', {
      selector: '#brevo-conversations-widget',
      zIndex: 9999,
      minimized: true,
      customLauncherSelector: null
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <BrevoChatPosition />
        <AppRoutes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
};

export default App;
