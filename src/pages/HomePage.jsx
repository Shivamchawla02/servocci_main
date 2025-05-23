import React from 'react';
import TopNavbar from '../components/TopNavbar.jsx';
import MainNavbar from '../components/MainNavbar.jsx';
import HomeTagline from '../components/home/HomeTagLine.jsx';
import OurServices from '../components/home/OurServices.jsx';
import FeaturedItemsSlider from '../components/home/FeaturedItemsSlider.jsx';
import ChatBotIcon from '../components/ChatBotIcon.jsx';
import WhatAfter12th from '../components/home/WhatAfter12th.jsx';

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <div className="bg-light">
        <HomeTagline />
        <FeaturedItemsSlider />
        <WhatAfter12th />
        <OurServices />
      </div>

      {/* Floating Chatbot Icon */}
      <ChatBotIcon />
    </>
  );
};

export default HomePage;
