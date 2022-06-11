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
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">

            <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
              <figure><img className='w-full h-72' src="https://i.ibb.co/DWjmMFM/firebase.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Firebase</h2>
                <p className='pb-4 text-base text-slate-700'>I use mongodb as a database because mongodb has many great futures that all user information can be protected and presented very easily. There are many more benefits</p>
              </div>
            </div>
            <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
              <figure><img className='w-full h-72' src="https://i.ibb.co/2YcLB7j/js.png" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">MongoDb</h2>
                <p className='pb-4 text-base text-slate-700'>I use mongodb as a database because mongodb has many great futures that all user information can be protected and presented very easily. There are many more benefits</p>
              </div>
            </div>
            <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
              <figure><img className='w-full h-72' src="https://i.ibb.co/KNSNBM6/react.png" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">MongoDb</h2>
                <p className='pb-4 text-base text-slate-700'>I use mongodb as a database because mongodb has many great futures that all user information can be protected and presented very easily. There are many more benefits</p>
              </div>
            </div>
            <div class="card card-compact bg-slate-200 shadow-xl rounded-md">
              <figure><img className='w-full h-72' src="https://i.ibb.co/pWBrdF7/bootstrap.png" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">MongoDb</h2>
                <p className='pb-4 text-base text-slate-700'>I use mongodb as a database because mongodb has many great futures that all user information can be protected and presented very easily. There are many more benefits</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
