import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './BestProjects.css'

const BestProjects = () => {
  
  return (
    <div>
      <section className='py-6'>
        <div className="container mx-auto px-2">
          <div className="header flex items-center justify-between py-4">
            <h1 className='text-3xl font-serif font-semibold text-slate-800'>Best Projects</h1>
            <Link to={'/total-projects'} className='text-lg underline text-blue-700'>see all </Link>
          </div>
          <div className="total_items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div id="single_project">
              <div id='img_div' className="card card-compact bg-slate-200 shadow-xl rounded-md ">
                <img className='w-full h-auto' src="https://i.ibb.co/dDWf72s/manu.png" alt="Shoes" />
              </div>
              <div id="projects_des" className='rounded-lg'>
                <h1 className='capitalize text-xl text-slate-800 font-serif font-semibold py-2 p-2'>Max Tools and part</h1>
                <p className='text-slate-600 capitalize p-2 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste expedita et laboriosam unde, odit nobis est corporis officiis tempora minima.</p>
                <button className="bg-blue-600 mt-2 hover:bg-blue-800 p-2 px-6 text-white  uppercase font-serif rounded-t text-sm w-full ">Live Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProjects;