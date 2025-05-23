import React from 'react';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import ChatBotIcon from '../components/ChatBotIcon';
import Pricing from '../components/psychometric/Pricing';
import PsychometricIntro from '../components/psychometric/PsychometricIntro';

const PsychometricTestPage = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <div className="bg-light">
        <PsychometricIntro />
        <Pricing />
      </div>

      {/* Floating Chatbot Icon */}
      <ChatBotIcon />
    </>
  );
};

export default PsychometricTestPage;
