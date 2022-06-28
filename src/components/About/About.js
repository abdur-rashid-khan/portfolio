import React from 'react';
import { Link } from 'react-router-dom';
import aboutPhoto from '../../img/about.jpg'

const About = () => {
  return (
    <section>
      <div className='container mx-auto py-6 px-4'>
        <div className="flex gap-6 items-center">
          <div className="sm:block hidden" data-aos="fade-right" data-aos-easing="linear"data-aos-duration="1000">
            <img className='lg:max-w-md sm:max-w-sm rounded shadow-xl' src={aboutPhoto} alt="photos" />
          </div>
          <div className="" data-aos="fade-left" data-aos-easing="linear"data-aos-duration="1000">
            <h1 className='text-3xl font-serif font-semibold text-slate-800'>Summary of skills </h1>
            <p className='text-slate-600 py-6 text-lg'>I can do responsive mobile programming for versatile backgrounds, frontend and backend
              development, static in web design. And using dynamically loaded content, I can create a website full of
              flour and develop other spelling sites..</p>
            <Link className='bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-sm uppercase font-serif rounded-bl-xl rounded-tr-xl' to={'#skills'}>see more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;