import React from 'react';
import CareerCounselingIntro from '../components/CareerCounseling/CareerCounselingIntro.jsx';
import Steps from '../components/CareerCounseling/Steps.jsx';
import CareerServices from '../components/CareerCounseling/CareerServices.jsx';

const CareerCounsellingPage = () => {
  return (
    <div>
      <CareerCounselingIntro />
      <Steps />
      <CareerServices />
    </div>
  );
};

export default CareerCounsellingPage;
