import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import MainNavbar from './components/MainNavbar';
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
import Login from './pages/Login.jsx';
import GetStarted from './pages/GetStarted.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';

const AppRoutes = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = ['/login', '/get-started', '/register/student'].includes(location.pathname);


  return (
    <>
      {/* Show navbars only when not on login/get-started */}
      {!isAuthPage && (
        <>
          <TopNavbar />
          <MainNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </>
      )}

      <main className="pt-0">
        <Routes>
          {/* Special Routes without navbars */}
          <Route
            path="/login"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button
                  onClick={() => navigate('/')}
                  className="mb-4 text-blue-500 hover:underline"
                >
                  ← Back to Home
                </button>
                <Login />
              </div>
            }
          />
          <Route
            path="/get-started"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button
                  onClick={() => navigate('/')}
                  className="mb-4 text-blue-500 hover:underline"
                >
                  ← Back to Home
                </button>
                <GetStarted />
              </div>
            }
          />
          <Route
            path="/register/student"
            element={
              <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <button
                  onClick={() => navigate('/')}
                  className="mb-4 text-blue-500 hover:underline"
                >
                  ← Back to Home
                </button>
                <RegisterStudent />
              </div>
            }
          />


          {/* Regular Routes */}
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/psychometric-tests" element={<PsychometricTestPage />} />
          <Route path="/document-upload" element={<PhoneNumberPage />} />
          <Route path="/document" element={<PhoneNumberPage />} />
          <Route path="/upload-docs" element={<DocumentPage />} />
          <Route path="/free-test" element={<FreeTestPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          

          {/* Placeholder routes */}
          <Route path="/career-counselling" element={<PlaceholderPage title="Career Counselling" />} />
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
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        <AppRoutes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
};

export default App;
