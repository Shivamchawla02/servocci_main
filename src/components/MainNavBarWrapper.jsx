// components/MainNavbarWrapper.jsx
import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar.jsx';

const MainNavbarWrapper = (props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
  return <MainNavbar {...props} />;
};

export default MainNavbarWrapper;
