import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './Banner.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div class="bg-slate-400"  id="banner">
          <div class="md:flex items-center justify-around  px-4 flex-row-reverse" id="bannerContent">
            <div className="text-center md:mt-10">
              <img src="https://i.ibb.co/9rj1Sk7/MG-5424.jpg" class=" rounded-full shadow-2xl m-auto " alt='banner' style={{width:'300px'}}/>
            </div>
            <div>
             <div className="">
             <h1 class="text-5xl font-bold text-sky-600">Hi! I am Rashid Khan ! </h1>
              <p class="py-6 text-2xl text-slate-800">I am a font-end developer and I can design and develop any web site.<br></br> Click the resume button and see my resume</p>
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
    </div>
  );
};

export default Banner;