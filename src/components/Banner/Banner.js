import React from 'react';

import fb from '../../img/fb.png'
import git from '../../img/git.png'
import link from '../../img/link.png'
import './Banner.css'

const Banner = () => {
  return (
    <section className='bg-slate-800 '>
      <div className="container mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-2 "  id="banner">
          <div className="md:flex items-center justify-around  px-4 flex-row-reverse" id="bannerContent">
            <div className="text-center mt-0 sm:mt-0">
              <img src="https://i.ibb.co/9rj1Sk7/MG-5424.jpg" className=" rounded-full shadow-2xl m-auto " alt='banner' style={{width:'300px'}}/>
            </div>
            <div>
             <div className="pt-10 md:pt-0">
             <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600">Hi! I am Rashid Khan ! </h1>
              <p className="py-6 text-lg sm:text-xl md:lg text-white">I am a font-end developer and I can design and develop any web site. <br></br>Click the resume button and see my resume</p>
              <a target={'_blank'} href={'https://drive.google.com/file/d/1uDjdWBJuly4Uu66tm0V9pivfcjZQhf6Y/view'} className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-xl uppercase font-serif rounded-bl-xl rounded-tr-xl">Resume</a>
             </div>
              <div className="">
            <ul className='flex items-center pt-10'>
              <li style={{width:'60px',height:'50px'}} ><a href="#"><img className='pt-1' src={fb} alt="" /></a></li>
              <li style={{width:'30px',height:'30px'}} ><a href="#"><img className='mr-4' src={link} alt="" /></a></li>
              <li style={{width:'30px',height:'30px'}} ><a href="#"><img className='ml-2' src={git} alt="" /></a></li>
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