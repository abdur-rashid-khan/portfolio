import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestProjects from '../BestProjects/BestProjects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <BestProjects></BestProjects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;