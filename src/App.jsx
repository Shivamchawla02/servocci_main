// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PsychometricTestPage from './pages/PsychometricTestPage';
import DocumentPage from './pages/DocumentPage';
import PhoneNumberPage from './pages/PhoneNumberPage';
import NotFound from './pages/NotFound.jsx'; // import your 404 component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/psychometric-tests" element={<PsychometricTestPage />} />
        <Route path="/document-upload" element={<PhoneNumberPage />} />
        <Route path="/document" element={<PhoneNumberPage />} />
        <Route path="/upload-docs" element={<DocumentPage />} />
        {/* 404 catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
