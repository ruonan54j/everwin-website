import React, { useState, useEffect } from 'react';
import Main from './Main'
import ServiceIntro from './ServiceIntro';
import HowTo from './HowTo';
import WhoWeAre from './WhoWeAre';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Landing() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <Main data-aos="fade-in"/>
      <ServiceIntro data-aos="fade-in"/>
      <HowTo data-aos="fade-in"/>
      <WhoWeAre data-aos="fade-in"/>
    </React.Fragment>
  );
}
  
export default Landing;
  