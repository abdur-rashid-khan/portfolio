import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './Banner.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <section className='bg-slate-800 '>
      <div className="container mx-auto ">
        <div class=" grid grid-cols-1 md:grid-cols-2 "  id="banner">
          <div class="md:flex items-center justify-around  px-4 flex-row-reverse" id="bannerContent">
            <div className="text-center mt-0 sm:mt-0">
              <img src="https://i.ibb.co/9rj1Sk7/MG-5424.jpg" class=" rounded-full shadow-2xl m-auto " alt='banner' style={{width:'300px'}}/>
            </div>
            <div>
             <div className="pt-10 md:pt-0">
             <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600">Hi! I am Rashid Khan ! </h1>
              <p class="py-6 text-lg sm:text-xl md:lg text-white">I am a font-end developer and I can design and develop any web site. <br></br>Click the resume button and see my resume</p>
              <a target={'_blank'} href='https://drive.google.com/file/d/1uDjdWBJuly4Uu66tm0V9pivfcjZQhf6Y/view' className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-xl uppercase font-serif rounded-bl-xl rounded-tr-xl">Resume</a>
             </div>
              <div className="">
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;