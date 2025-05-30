import React from 'react';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import ChatBotIcon from '../components/ChatBotIcon';
import Pricing from '../components/psychometric/Pricing';
import PsychometricIntro from '../components/psychometric/PsychometricIntro';
import PsychometricQuotes from '../components/psychometric/PsychometricQuotes.jsx';
import Footer from '../components/Footer.jsx';

const PsychometricTestPage = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <div className="bg-light">
        <PsychometricIntro />
        <PsychometricQuotes />
        <Pricing />
        <Footer />
      </div>

      {/* Floating Chatbot Icon */}
      <ChatBotIcon />
    </>
  );
};

export default PsychometricTestPage;
