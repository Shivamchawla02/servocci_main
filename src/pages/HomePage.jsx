import React from 'react';
import TopNavbar from '../components/TopNavbar.jsx';
import HomeTagline from '../components/home/HomeTagLine.jsx';
import OurServices from '../components/home/OurServices.jsx';
import FeaturedItemsSlider from '../components/home/FeaturedItemsSlider.jsx';
import ChatBotIcon from '../components/ChatBotIcon.jsx';
import WhatAfter12th from '../components/home/WhatAfter12th.jsx';
import Footer from '../components/Footer.jsx';
import ClientOnly from '../components/ClientOnly.jsx';
import MainNavbar from '../components/MainNavbar.jsx';
import PsychometricPreview from '../components/home/PsychometricPreview.jsx';
import BlogsPreview from '../components/home/BlogsPreview.jsx';

const HomePage = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>

      <div className="bg-light">
        <HomeTagline />
        <FeaturedItemsSlider />
        <PsychometricPreview />
        <WhatAfter12th />
        <OurServices />
        <BlogsPreview/>
        <Footer />
      </div>

      <ChatBotIcon />
    </>
  );
};

export default HomePage;
