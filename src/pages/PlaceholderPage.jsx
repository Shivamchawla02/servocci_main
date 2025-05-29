// src/pages/PlaceholderPage.jsx
import React from 'react';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-gray-500">This page is coming soon. Stay tuned!</p>
  </div>
);

export default PlaceholderPage;
