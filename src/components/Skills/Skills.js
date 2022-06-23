import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <section className='py-6'>
      <div className="container mx-auto px-4">
        <div className="">
          <div className="skills_header">
            <div className="header flex items-center justify-between py-4">
              <h1 className='text-3xl font-serif text-slate-800 font-semibold'> Skills </h1>
              <Link to={'/total-projects'} className='text-lg underline text-blue-700'>see all </Link>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 pt-4">
            <div className="">
              <div className="flex items-center justify-center gap-4">
                <h1 className='uppercase  '>html</h1>
                <ProgressBar 
                className='w-full'
                  completed={80}
                  transitionTimingFunction={'ease-in-out'}
                  animateOnRender={true}
                  bgColor='#fb5200'
                  height='10px'
                />
              </div>
            </div>
            <div className="">
            <div className="flex items-center justify-center gap-4">
                <h1 className='uppercase  '>css</h1>
                <ProgressBar 
                className='w-full'
                  completed={80}
                  transitionTimingFunction={'ease-in-out'}
                  animateOnRender={true}
                  bgColor='#fb5200'
                />
              </div>
            </div>
            <div className="">
            <div className="flex items-center justify-center gap-4">
                <h1 className='uppercase  '>javascript</h1>
                <ProgressBar 
                className='w-full'
                  completed={80}
                  transitionTimingFunction={'ease-in-out'}
                  animateOnRender={true}
                  bgColor='#fb5200'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
