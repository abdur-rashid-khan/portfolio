import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestProjects from '../BestProjects/BestProjects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import SummaryTotalProjects from '../SummaryTotalProjects/SummaryTotalProjects';


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <BestProjects></BestProjects>
      <SummaryTotalProjects></SummaryTotalProjects>
      {/* <Slider></Slider> */}
      <Blog></Blog>
      <Contact></Contact>
    </>
  );
};

export default Home;