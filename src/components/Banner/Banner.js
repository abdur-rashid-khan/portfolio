import React from 'react';
import Typewriter from 'typewriter-effect';

import fb from '../../img/fb.svg'
import git from '../../img/github.svg'
import link from '../../img/linkedin.svg'
import gmail from '../../img/gmail-svgrepo-com.svg'
import whatsapp from '../../img/whatsapp.svg'
import telegram from '../../img/telegram.svg'
import photos from '../../img/presonal photos.png'
// import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Banner.css'

const Banner = () => {
  new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  }
    return (
      <section id='banner_section' >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 10,
                enable: true,
                opacity: 0.4,
                width: 100,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 700,
                },
                value: 45,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        {/*  */}
        <div className="container mx-auto ">
          <div className=" grid grid-cols-1 md:grid-cols-2" id="banner" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div className="md:flex items-center justify-around  px-4 flex-row-reverse" id="bannerContent">
              <div className="text-center mt-0 sm:mt-0 " >
                <span id='svg'></span>
                <div id="readies">
                  <img src={photos} className=" shadow-2xl m-auto " alt='banner' />
                </div>
              </div>
              <div>
                {/* data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"? */}
                <div className="pt-10 md:pt-0" >
                  <h1 className="flex text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white capitalize font-serif gap-2 text"> I
                    <span><Typewriter
                      options={{
                        delay: 200,
                        deleteChars: 200,
                        strings: [' am Rashid Khan...', ' am a web developer', 'am a web designer', ' love programming...'],
                        autoStart: true,
                        loop: true,
                      }}
                    /></span>
                  </h1>
                  <h4 className="py-6 text-lg sm:text-xl md:lg text-white">I  am a font-end  and back-end developer . I can design and develop any web site. Click the resume button and see my resume.. <br></br>Click the resume button and see my resume.
                  </h4>
                  <a target={'_blank'} href={'https://drive.google.com/file/d/1uDjdWBJuly4Uu66tm0V9pivfcjZQhf6Y/view'} className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-xl uppercase font-serif rounded-bl-xl rounded-tr-xl">Resume</a>
                </div>
                <div className="" >
                  <ul className='flex items-center pt-10'>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="https://www.facebook.com/profile.php?id=100026716455859" target='_blank'><img src={fb} alt="" /></a></li>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="https://www.linkedin.com/in/abdur-rashid-khan-811485241/" target={'_blank'} ><img src={link} alt="" /></a></li>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="" target={'_blank'} ><img src={whatsapp} alt="" /></a></li>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="" target={'_blank'} ><img src={gmail} alt="" /></a></li>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="" target={'_blank'} ><img src={telegram} alt="" /></a></li>
                    <li className='mr-2' style={{ width: '28px', height: '28px' }} ><a href="https://github.com/abdur-rashid-khan" target={'_blank'} ><img src={git} alt="" /></a></li>
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