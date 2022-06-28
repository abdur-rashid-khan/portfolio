import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestProjects from '../BestProjects/BestProjects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';
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
      <Slider></Slider>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;