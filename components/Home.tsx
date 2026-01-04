
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import WhyChooseMe from './WhyChooseMe';
import TechStack from './TechStack';
import Process from './Process';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import HomeExperience from './HomeExperience';
import HomeProjects from './HomeProjects';
import HomeCertifications from './HomeCertifications';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <HomeExperience />
      <Services />
      <HomeProjects />
      <Process />
      <HomeCertifications />
      <WhyChooseMe />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
